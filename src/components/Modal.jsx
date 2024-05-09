import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalCustom = ({showModal, setShowModal, modalBody, modalTitle, path}) => {

    const navigate = useNavigate();

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
            navigate('/');
            }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
