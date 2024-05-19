import React, { useState, useEffect } from "react";
import { getOrders } from "../utils/apiCall";

const Orders = () => {
  const [orders, setOrders] = useState(null);

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
                        <div>
                          <strong>Formule: {order.plan}</strong>
                          <br />
                          <strong>Détenteur: {order.owner}</strong>
                        </div>
                        <a
                          className="btn btn-primary me-2 position-relative"
                          href="/account"
                        >
                          <ion-icon name="scan"/>
                        </a>
                      </div>
                    ))}
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
