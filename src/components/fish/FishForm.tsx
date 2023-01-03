import Modal from "../UI/Modal";

const FishForm: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h3>Form</h3>
    </Modal>
  );
};

export default FishForm;
