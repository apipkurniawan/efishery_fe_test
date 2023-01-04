import Modal from "../UI/Modal";
import "./FishForm.scss";

const FishForm: React.FC<{ onClose: () => void }> = (props) => {
  const submitHandler = () => {};

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className="form-container">
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="komoditas">Komoditas</label>
          <input type="text" id="komoditas" />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="prov">City</label>
          <input type="text" id="prov" />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="komoditas">Provinsi</label>
          <input type="text" id="komoditas" />
        </div>
        <div className={`control ${false ? "invalid" : ""}`}>
          <label htmlFor="prov">Price</label>
          <input type="text" id="prov" />
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
