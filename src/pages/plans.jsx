import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPlans } from "../utils/apiCall";
import axios from "axios";
import { useCart } from "react-use-cart";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  const { addItem } = useCart();

  useEffect(() => {
    getPlans().then((response) => {
      setPlans(response.data);
      console.log(response.data);
      console.log(plans);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="container mt-5">
  <h1>Nos offres</h1>
  <div className="row">
    {plans.map((plan) => (
      <div key={plan.id} className="col-md-4">
        <div className="card mb-4">
          <img
            src={plan.image_url}
            className="card-img-top"
            alt={plan.plan}
          />
          <div className="card-body">
            <h5 className="card-title">{plan.plan}</h5>
            <p className="card-text">{`Donne accès à ${plan.ticket_quantity} personne.`}</p>
            <p className="card-text">Prix: {plan.price} €</p>
            <button
              className="btn btn-primary me-2"
              onClick={() => {
                addItem(plan, 1);
              }}
            >
              Ajouter au Panier
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</main>

      <Footer />
    </>
  );
};

export default Plans;
