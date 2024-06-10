import React, { useState, useEffect } from "react";
import Orders from "./Orders";
import { getPlans } from "../utils/apiCall";
import ModalDeletePlan from "./ModalDeletePlan";
import ModalAddPlan from "./ModalAddPlan";
import ModalUpdatePlan from "./ModalUpdatePlan";
import PieChartComponent from "./PieChart";

const Admin = () => {
  const [plans, setPlans] = useState([]);
  const [showModalDeletePlan, setShowModalDeletePlan] = useState(false);
  const [showModalAddPlan, setShowModalAddPlan] = useState(false);
  const [showModalUpdatePlan, setshowModalUpdatePlan] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    getPlans().then((response) => {
      setPlans(response.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="mb-3 p-3 border border-2 rounded">
          <h1 className="text-center">Administration</h1>
        </div>
        <div className="accordion mb-3">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOrders"
                aria-expanded="false"
                aria-controls="collapseOrders"
              >
                Commandes
              </button>
            </h2>
            <div
              id="collapseOrders"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Orders />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlans"
                aria-expanded="false"
                aria-controls="collapseOrders"
              >
                Gestion des Offres
              </button>
            </h2>
            <div
              id="collapsePlans"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row">
                  {plans.map((plan) => (
                    <div key={plan.id} className="col-md-4">
                      <div className="card mb-4">
                        <img
                          src={plan.image_url}
                          className="card-img-top"
                          alt={plan.plan}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{plan.plan}</h5>
                          <p className="card-text">{`Donne accès à ${plan.ticket_quantity} personne.`}</p>
                          <p className="card-text">Prix: {plan.price} €</p>
                          <button
                            className="btn btn-primary me-2 mb-2"
                            onClick={() => {
                              setCurrentPlan(plan);
                              setshowModalUpdatePlan(true);
                            }}
                          >
                            Modifier offre
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              setShowModalDeletePlan(true);
                              setCurrentPlan(plan);
                            }}
                          >
                            Supprimer offre
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setShowModalAddPlan(true);
                    }}
                  >
                    Créer offre
                  </button>
                  <ModalDeletePlan
                    showModal={showModalDeletePlan}
                    setShowModal={setShowModalDeletePlan}
                    modalTitle="Supprimer Offre"
                    plan={currentPlan}
                    setPlans={setPlans}
                  />

                  <ModalAddPlan
                    showModal={showModalAddPlan}
                    setShowModal={setShowModalAddPlan}
                    plan={currentPlan}
                    setPlans={setPlans}
                  />

                  <ModalUpdatePlan
                    showModal={showModalUpdatePlan}
                    setShowModal={setshowModalUpdatePlan}
                    plan={currentPlan}
                    setPlans={setPlans}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-3 border border-2 rounded">
          <h1 className="text-center">Ventes</h1>
        </div>
        <PieChartComponent />
      </div>
    </>
  );
};

export default Admin;
