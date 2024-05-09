import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ModalCustom from "./Modal";

import { Modal, Button } from "react-bootstrap";

const SignInForm = () => {
  const { userInfo, login } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    var username = event.target[0].value;
    var password = event.target[1].value;

    await login(username, password);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    setShowModal(true);

    //navigate(-1);
  }

  if (isLoading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );
  } else if (userInfo !== null) {
    return (
      <main>
        <div
          className="d-flex justify-content-center align-items-center"
        >
          <div className="alert alert-info" role="alert">
            Vous êtes déjà connecté
          </div>
        </div>
        <ModalCustom
          showModal={showModal}
          setShowModal={setShowModal}
          modalBody={userInfo.message}
          modalTitle="Information"
        />
      </main>
    );
  } else {
    return (
      <main class="container form-signin d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    );
  }
};

export default SignInForm;
