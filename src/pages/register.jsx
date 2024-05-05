import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Header />
      <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
