import React from "react";
import { Link } from "react-router-dom"; // Si vous utilisez React Router
import { Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const CheckoutPage = () => {
  const { items, totalItems, removeItem, updateItemQuantity, emptyCart } =
    useCart();

  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("token");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    console.log("Form submitted")
    console.log(event.target)
    console.log(data)

    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      username: data.get("username"),
      email: data.get("email"),
      address: data.get("address"),
      address2: data.get("address2"),
      country: data.get("country"),
      state: data.get("state"),
      zip: data.get("zip"),
      ccName: data.get("cc-name"),
      ccNumber: data.get("cc-number"),
      ccExpiration: data.get("cc-expiration"),
      ccCvv: data.get("cc-cvv"),
    };

    console.log(formData);
    alert("Commande passée avec succès");

    //emptyCart();
  }

  if (!token) {
    return (
      <>
        <Header />
        <div class="d-flex justify-content-center align-items-center">
          <div class="alert alert-warning" role="alert">
            Veuillez d'abord vous connecter
          </div>
        </div>

        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div class="d-flex justify-content-center align-items-center">
          <div class="alert alert-warning" role="alert">
            Votre panier est vide
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main class="container">
        <div class="py-5 text-center">
          <h2>Checkout</h2>
        </div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">{totalItems}</span>
            </h4>
            <ul class="list-group mb-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  class="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 class="my-0">{item.plan}</h6>
                    <small class="text-body-secondary">Brief description</small>
                  </div>
                  <span class="text-body-secondary">{item.price} €</span>
                </li>
              ))}
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (EUR)</span>
                <strong>
                  {items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}{" "}
                  €
                </strong>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" onSubmit={handleSubmit}>
              <div class="row g-3">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      required="true"
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">@</span>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        required="true"
                      />
                      <div class="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email <span class="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address2" class="form-label">
                      Address 2{" "}
                      <span class="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Country
                    </label>
                    <select class="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="state" class="form-label">
                      State
                    </label>
                    <select class="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="zip" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
              </div>

              <hr class="my-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    checked="true"
                  />
                  <label class="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
              </div>
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required="true"
                  />
                  <small class="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>

                <div class="col-md-6">
                  <label for="cc-number" class="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required="true"
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required="true"
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>

                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required="true"
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
