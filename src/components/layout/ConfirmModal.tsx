import React from "react";
import Modal from "../UI/Modal";

const ConfirmModal: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h3>Apakah anda yakin?</h3>
    </Modal>
  );
};

export default ConfirmModal;
