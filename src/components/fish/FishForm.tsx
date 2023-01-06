import { useContext, useState } from "react";
import { FishContext } from "../../store/fish-context";
import { useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import Modal from "../UI/Modal";
import { Select } from "../../models/select";
import "./FishForm.scss";
import { Area } from "../../models/area";
import FishModel from "../../models/fish";
import { BASE_API_URL } from "../../config/base-url";
import SteinStore from "stein-js-client";

const store = new SteinStore(BASE_API_URL);

const FishForm: React.FC<{
  onClose: () => void;
  onSave: () => void;
  selectedData?: FishModel;
}> = (props) => {
  const [enteredKomoditas, setEnteredKomoditas] = useState("");
  const [enteredProv, setEnteredProv] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredSize, setEnteredSize] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<Select[]>([]);
  const fishCtx = useContext(FishContext);

  const onChangeProvHandler = (data: any) => {
    const selectedProv = typeof data === "string" ? data : data.target.value;
    setEnteredProv(selectedProv);
    const filteredArea = fishCtx.areas.filter((v) => v.label === selectedProv);
    let selectCities: Select[] = [];
    filteredArea[0].item.cities.forEach((el: Area) => {
      selectCities.push({ label: el.city, value: el.city, item: el });
    });
    setCities(selectCities);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let data = new FishModel(
      props.selectedData
        ? props.selectedData.uuid
        : `${new Date().getTime().toString()}${Math.random()}`,
      enteredKomoditas,
      enteredProv,
      enteredCity,
      enteredSize,
      enteredPrice,
      new Date().toISOString(),
      new Date().getTime().toString()
    );
    if (!props.selectedData) {
      await store.append("list", [data]).then(
        (res: any) => {
          // console.log("SAVE FISH : ", res);
        },
        (error: Error) => {
          console.log("ERROR : ", error);
        }
      );
    } else {
      await store
        .edit("list", {
          search: { uuid: data.uuid },
          set: data,
        })
        .then(
          (res: any) => {
            // console.log("UPDATE FISH : ", res);
          },
          (error: Error) => {
            console.log("ERROR : ", error);
          }
        );
    }
    setLoading(false);
    props.onSave();
  };

  const onChangeKomHandler = (e: any) => {
    setEnteredKomoditas(e.target.value);
  };

  const onChangeCityHandler = (e: any) => {
    setEnteredCity(e.target.value);
  };

  const onChangeSizeHandler = (e: any) => {
    setEnteredSize(e.target.value);
  };

  const onChangePriceHandler = (e: any) => {
    setEnteredPrice(e.target.value);
  };

  useEffect(() => {
    // console.log("FISH FORM!");
    if (props.selectedData) {
      setEnteredKomoditas(props.selectedData.komoditas);
      setEnteredPrice(props.selectedData.price);
      setEnteredProv(props.selectedData.area_provinsi);
      setEnteredSize(props.selectedData.size);
      onChangeProvHandler(props.selectedData.area_provinsi);
      setEnteredCity(props.selectedData.area_kota);
    }
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("VALIDITY");
      setFormIsValid(
        enteredKomoditas.trim().length > 0 &&
          enteredCity.trim().length > 0 &&
          enteredPrice.trim().length > 0 &&
          enteredProv.trim().length > 0 &&
          enteredSize.trim().length > 0
      );
    }, 500);

    return () => {
      // console.log("CLEANUP VALIDITY");
      clearTimeout(identifier);
    };
  }, [enteredCity, enteredKomoditas, enteredPrice, enteredProv, enteredSize]);

  const widthDropdown = { width: "14.5rem" };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="form-container">
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="komoditas">Komoditas</label>
          <input
            type="text"
            id="komoditas"
            value={enteredKomoditas}
            onChange={onChangeKomHandler}
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="prov">Provinsi</label>
          <Dropdown
            style={widthDropdown}
            name="prov"
            value={fishCtx.areas}
            selected={enteredProv}
            onChange={onChangeProvHandler}
            placeholder="Choose prov ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="city">City</label>
          <Dropdown
            name="city"
            style={widthDropdown}
            value={cities}
            selected={enteredCity}
            onChange={onChangeCityHandler}
            placeholder="Choose city ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="size">Size</label>
          <Dropdown
            style={widthDropdown}
            name="size"
            selected={enteredSize}
            onChange={onChangeSizeHandler}
            value={fishCtx.sizes}
            placeholder="Choose size ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={enteredPrice}
            onChange={onChangePriceHandler}
          />
        </div>
        <div className="actions">
          <button
            type="submit"
            className="btn"
            disabled={!formIsValid || loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <button type="button" className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FishForm;
