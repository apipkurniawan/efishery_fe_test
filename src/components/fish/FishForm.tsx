import Dropdown from "../UI/Dropdown";
import Modal from "../UI/Modal";
import "./FishForm.scss";

const FishForm: React.FC<{ onClose: () => void }> = (props) => {
  const submitHandler = () => {};

  const listCity = ["jakarta", "bandung"];

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="form-container">
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="komoditas">Komoditas</label>
          <input type="text" id="komoditas" />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="city">City</label>
          <Dropdown
            name="city"
            value={listCity}
            placeholder="Choose city ..."
          />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="prov">Provinsi</label>
          <Dropdown
            name="prov"
            value={listCity}
            placeholder="Choose prov ..."
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
