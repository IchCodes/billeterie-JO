import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addPlan, getPlans, updatePlan } from "../utils/apiCall";

const ModalUpdatePlan = ({ showModal, setShowModal, plan, setPlans }) => {
  const [formState, setFormState] = useState({
    planName: '',
    numberPerson: '',
    price: ''
  });

  useEffect(() => {
    if (plan) {
      setFormState({
        planName: plan.plan || '',
        numberPerson: plan.ticket_quantity || '',
        price: plan.price || ''
      });
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { planName, numberPerson, price } = formState;
    console.log({ planName, numberPerson, price });

    updatePlan(plan.id, planName, numberPerson, price, plan.image_url).then((response) => {
      console.log(response);
      getPlans().then((response) => {
        setPlans(response.data);
      });
      setShowModal(false);
    });
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une offre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addPlanForm">
          <Form.Group controlId="formPlanName">
            <Form.Label>Nom de l'offre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom de l'offre"
              name="planName"
              value={formState.planName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formNumberPerson">
            <Form.Label>Nombre de participants</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nombre de participants"
              name="numberPerson"
              value={formState.numberPerson}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Prix</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le prix de l'offre"
              name="price"
              value={formState.price}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleSubmit}>
          Oui
        </Button>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Non
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdatePlan;
