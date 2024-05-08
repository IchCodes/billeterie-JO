import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const plans = () => {
  return (
    <>
      <Header />
      <div class="container mt-5">
        <h1>Nos offres</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <img
                src="solo2.jpg"
                class="card-img-top"
                alt="Gymnastique"
              />
              <div class="card-body">
                <h5 class="card-title">Offre Solo</h5>
                <p class="card-text">Donne accès à 1 personne.</p>
                <a href="#" class="btn btn-primary">
                  Réserver
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
            <img
                src="duo.jpg"
                class="card-img-top"
                alt="Gymnastique"
              />
              <div class="card-body">
                <h5 class="card-title">Offre Duo</h5>
                <p class="card-text">Donne accès à 2 personnes.</p>
                <a href="#" class="btn btn-primary">
                  Réserver
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
            <img
                src="family.jpg"
                class="card-img-top"
                alt="Gymnastique"
              />
              <div class="card-body">
                <h5 class="card-title">Offre Familiale</h5>
                <p class="card-text">Donne accès à 4 personnes.</p>
                <a href="#" class="btn btn-primary">
                  Réserver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default plans;
