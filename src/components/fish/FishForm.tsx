import { useContext } from "react";
import { FishContext } from "../../store/fish-context";
import { useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import Modal from "../UI/Modal";
import { Select } from "../../models/select";
import "./FishForm.scss";

const FishForm: React.FC<{ onClose: () => void }> = (props) => {
  const fishCtx = useContext(FishContext);
  const list: Select[] = [];

  const submitHandler = () => {};

  useEffect(() => {
    console.log("FISH FORM!");
  }, []);

  const widthDropdown = { width: "14.5rem" };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="form-container">
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="komoditas">Komoditas</label>
          <input type="text" id="komoditas" />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="prov">Provinsi</label>
          <Dropdown
            style={widthDropdown}
            name="prov"
            value={fishCtx.areas}
            placeholder="Choose prov ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="city">City</label>
          <Dropdown
            name="city"
            style={widthDropdown}
            value={list}
            placeholder="Choose city ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="size">Size</label>
          <Dropdown
            style={widthDropdown}
            name="size"
            value={fishCtx.sizes}
            placeholder="Choose size ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" />
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
