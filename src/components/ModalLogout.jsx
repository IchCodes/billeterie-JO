import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ModalLogout = ({
  showModal,
  setShowModal,
  modalBody,
  modalTitle,
  path,
  onLogout,
}) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setShowModal(false);
    // Redirection vers la page de login après déconnexion de manière asynchrone
    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleLogout}>
          Oui
        </Button>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Non
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogout;
