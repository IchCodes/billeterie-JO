import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalAddPlan = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une offre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addPlanForm">
          <Form.Group controlId="formPlanName">
            <Form.Label>Nom de l'offre</Form.Label>
            <Form.Control type="text" placeholder="Entrez le nom de l'offre" name="formPlanName" />
          </Form.Group>
          <Form.Group controlId="formNumberPerson">
            <Form.Label>Nombre de participants</Form.Label>
            <Form.Control type="text" placeholder="Entrez le nombre de participants" name="formNumberPerson" />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Prix</Form.Label>
            <Form.Control type="text" placeholder="Entrez le prix de l'offre" name="formPrice" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            const formElement = document.querySelector('#addPlanForm');
            const formData = new FormData(formElement);
            const planName = formData.get('formPlanName');
            const numberPerson = formData.get('formNumberPerson');
            const price = formData.get('formPrice');

            console.log({ planName, numberPerson, price });
          }}
        >
          Oui
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Non
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddPlan;
