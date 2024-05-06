import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
