import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = (
  props
) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
