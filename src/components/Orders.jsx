import React, { useState, useEffect } from "react";
import { getOrders } from "../utils/apiCall";
import ModalScan from "./ModalScan";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [showModalOrders, setShowModalOrders] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  
  useEffect(() => {
    getOrders().then((response) => {
      const ordersByOrderId = response.reduce((acc, order) => {
        if (!acc[order.order_id]) {
          acc[order.order_id] = [];
        }
        acc[order.order_id].push(order);
        return acc;
      }, {});
      setOrders(ordersByOrderId);
    });
  }, []);

  return (
    <main>
      <div className="container">
        <h1 className="text-center">Mes commandes</h1>
        <div className="accordion" id="accordionExample">
          {orders &&
            Object.entries(orders).map(([orderId, orderGroup], index) => (
              <div className="accordion-item" key={orderId}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${orderId}`}
                    aria-expanded="false"
                    aria-controls={`collapse${orderId}`}
                    onClick={() => setCollapsed(!collapsed)}
                    style={collapsed ? {} : { backgroundColor: "#d3c47d" }}
                  >
                    # Commande numéro {orderId}
                  </button>
                </h2>
                <div
                  id={`collapse${orderId}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {orderGroup.map((order) => (
                      <div
                        key={order.ticket_id}
                        className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded"
                      >
                        <div className="d-flex flex-grow-1 align-items-stretch">
                          <div className="card mb-3 flex-grow-1">
                            <div
                              className="card-header font-weight-bold"
                              style={{ backgroundColor: "#d3c47d" }}
                            >
                              Ticket numéro #{order.ticket_id}
                            </div>
                            <div className="card-body p-2">
                              <div className="input-group has-validation">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={"Détenteur: " + order.owner}
                                  disabled
                                  style={{ backgroundColor: "#d3c47d" }}
                                />
                              </div>
                              <div className="input-group has-validation mt-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={"Formule: " + order.plan}
                                  disabled
                                  style={{ backgroundColor: "#d3c47d" }}
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn ms-2 mb-3"
                            style={{ height: "auto", backgroundColor: "#d3c47d" }}
                            onClick={() => {
                              setShowModalOrders(true);
                              setCurrentOrder(order);
                            }}
                          >
                            <ion-icon name="download" size="large"/>
                          </button>
                        </div>
                      </div>
                    ))}

                    {currentOrder && (
                      <ModalScan
                        showModal={showModalOrders}
                        order={currentOrder}
                        modalTitle="Information"
                        setShowModal={setShowModalOrders}
                      />
                    )}
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;
