import React from "react";
import Modal from "./Modal";
import "./ConfirmDialog.scss";

const ConfirmDialog: React.FC<{
  onClose: () => void;
  message: string;
  onAccept: () => void;
}> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h3 className="message">{props.message}</h3>
      <div className="actions">
        <button className="button" onClick={props.onAccept}>
          Yes
        </button>
        <button className="button-no" onClick={props.onClose}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
