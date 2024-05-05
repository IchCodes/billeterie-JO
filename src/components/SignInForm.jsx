import axios from "axios";
import React from "react";

import { getToken } from "../utils/getToken";



const SignInForm = () => {

    var usernzme = 'junayd@hichamesraidi.fr';
    var password = 'toto';

    async function handleSubmit(event) {
        event.preventDefault();

        var username = event.target[0].value;
        var password = event.target[1].value;

        var result = await getToken(username, password);
      
        console.log(result.message + " -- " + result.token);
      }

  return (
      <main class="container form-signin d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit} >
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
          <button class="btn btn-primary w-100 py-2" type="submit" >
            Sign in
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
  );
};

export default SignInForm;
