import React, { useEffect, useState }from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPlans } from "../utils/apiCall";
import axios from "axios";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    getPlans().then(response => {
      setPlans(response.data);
      console.log(response.data)
      console.log(plans)
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
                  <a href="#" className="btn btn-primary">
                    Réserver
                  </a>
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
