import React from "react";
import { Button, Modal } from "react-bootstrap";
//import { useCart } from "react-use-cart";

const ModalCart = ({
  showModal,
  setShowModal,
  modalTitle,
  items,
  removeItem,
  updateItemQuantity,
  emptyCart,
}) => {
  ///const { items } = useCart();
  console.log("first");
  console.log(items);
  console.log(items);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length == 0 ? (
          <p className="text-center">No items in the cart</p>
        ) : (
          <>
          {items.map((item) => (
            <div key={item.id} className="row">
              <div className="col-md-4 mb-2 ">
                <img
                  src={item.image_url}
                  className="card-img-top border border-warning border-3 rounded-4"
                  alt={item.plan}
                />
              </div>
              <div className="col-md-8">
                <h5 className="card-title">{item.plan}</h5>
                <p className="card-text">{`Donne accès à ${item.ticket_quantity} personne.`}</p>
                <div className="card-text d-flex justify-content-between align-items-center">
                  <div>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => {
                        // Decrease item quantity
                        // Implement the logic to decrease the item quantity here
                        updateItemQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <span className="card-text m-2 ">{item.quantity}</span>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => {
                        // Increase item quantity
                        // Implement the logic to increase the item quantity here
                        updateItemQuantity(item.id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                    <button
                      class="btn btn-danger ms-2"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      <ion-icon name="trash" />
                    </button>
                  </div>
                  <div className="ms-auto">
                    <span className="card-text m-2">
                      {item.price * item.quantity} €
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-3">
              <h5>
                Total Price:{" "}
                {items.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                €
              </h5>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            // Remove all items from cart
            // Implement the logic to remove the items from the cart here
            emptyCart();
          }}
        >
          Clear Cart
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCart;
