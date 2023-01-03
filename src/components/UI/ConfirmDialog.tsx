import React from "react";
import Modal from "./Modal";
import "./ConfirmDialog.scss";

const ConfirmDialog: React.FC<{ onClose: () => void; message: string }> = (
  props
) => {
  return (
    <Modal onClose={props.onClose}>
      <h3 className="title">{props.message}</h3>
      <div className="actions">
        <button className="button">Yes</button>
        <button className="button--alt" onClick={props.onClose}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
