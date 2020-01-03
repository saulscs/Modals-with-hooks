import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Modal, ModalBackground, ModalContent, ModalClose } from "bloomer";

const CustomModal = ({ show, children, closeModal }) => {
  const domEl = document.getElementById("modal-root");

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <Modal isActive={show}>
      <ModalBackground onClick={closeModal} />
      <ModalContent
        style={{ backgroundColor: "white", padding: "2rem", maxWidth: "100vw" }}
      >
        {children}
        {show}
      </ModalContent>
      <ModalClose onClick={closeModal} />
    </Modal>,
    domEl
  );
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default CustomModal;
