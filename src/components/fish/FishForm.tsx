import { useContext, useState } from "react";
import { FishContext } from "../../store/fish-context";
import { useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import Modal from "../UI/Modal";
import { Select } from "../../models/select";
import "./FishForm.scss";
import { Area } from "../../models/area";
import FishModel from "../../models/fish";

const FishForm: React.FC<{ onClose: () => void }> = (props) => {
  const [enteredKomoditas, setEnteredKomoditas] = useState("");
  const [enteredProv, setEnteredProv] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredSize, setEnteredSize] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [cities, setCities] = useState<Select[]>([]);
  const fishCtx = useContext(FishContext);

  const onChangeProvHandler = (data: any) => {
    setEnteredProv(data.target.value);
    const filteredArea = fishCtx.areas.filter(
      (v) => v.label === data.target.value
    );
    let selectCities: Select[] = [];
    filteredArea[0].item.cities.forEach((el: Area) => {
      selectCities.push({ label: el.city, value: el.city, item: el });
    });
    setCities(selectCities);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("submitHandler");
    let data = new FishModel(
      enteredKomoditas,
      enteredProv,
      enteredCity,
      enteredPrice,
      enteredSize,
      new Date().toISOString(),
      new Date().getTime().toString()
    );
    console.log("submit", data);
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
    console.log("FISH FORM!");
  }, []);

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
            onChange={onChangeCityHandler}
            placeholder="Choose city ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="size">Size</label>
          <Dropdown
            style={widthDropdown}
            name="size"
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
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FishForm;
