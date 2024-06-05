import React from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteOrder, getPlans } from "../utils/apiCall";

const ModalDeletePlan = ({ showModal, setShowModal, modalTitle, plan, setPlans }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle + " " + (plan ? plan.plan : "")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Êtes-vous sûr de vouloir supprimer cette offre ? </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            deleteOrder(plan.id).then((response) => {
              console.log(response);
              getPlans().then((response) => {
                setPlans(response.data);
              });
                setShowModal(false);
            });
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
};

export default ModalDeletePlan;
