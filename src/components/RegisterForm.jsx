import React from 'react'

const RegisterForm = () => {
  return (
    <main class="container form-signin d-flex flex-column justify-content-center align-items-center">
        <form>
          <img
            class="mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

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
            Sign in
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
  )
}

export default RegisterForm