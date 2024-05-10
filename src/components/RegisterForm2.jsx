import React, { useState } from "react";
import { registerUser } from "../utils/registerUser";

const RegisterForm2 = () => {
  const [isRegistering, setisRegistering] = useState(false);

  const [isRegistered, setisRegistered] = useState(false);

  const [message, setmessage] = useState(null)


  async function handleSubmit(event) {
    event.preventDefault();

    setisRegistering(true);

    var firstName = event.target[0].value;
    var lastName = event.target[1].value;
    var username = event.target[2].value;
    var password = event.target[3].value;

    var result = await registerUser(lastName, firstName, username, password);

    setmessage(result.message);

    setTimeout(() => {
        setisRegistering(false);
        setisRegistered(true);
      }, 1500);

    console.log(result.message);

  }

  if (isRegistering) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );
  } else if (isRegistered) {
    return (
      <main>
        <div className="d-flex justify-content-center align-items-center">
          <div className="alert alert-info" role="alert">
            {message}
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main class="container form-signin d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="First Name"
            />
            <label for="firstName">First Name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Last Name"
            />
            <label for="lastName">Last Name</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
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
            Register
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    );
  }
};

export default RegisterForm2;
