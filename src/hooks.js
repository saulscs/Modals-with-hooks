import React, { useState } from "react";
import Modal from "./modal";

export const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggle = () => setModalOpen(!modalOpen);
  const show = () => setModalOpen(true);

  const RenderModal = props => (
    <React.Fragment>
      {modalOpen && (
        <Modal show={show} closeModal={toggle}>
          {props.children}
        </Modal>
      )}
    </React.Fragment>
  );

  return [toggle, show, RenderModal];
};
