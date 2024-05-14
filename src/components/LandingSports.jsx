import React from 'react'

const landingSports = () => {
  return (
    <main>
        <div class="container mt-5">
          <div class="jumbotron">
            <h1 class="display-4">Bienvenue aux Jeux Olympiques 2024 !</h1>
            <p class="lead">
              Rejoignez-nous pour célébrer l'esprit sportif et l'excellence
              humaine.
            </p>
          </div>

          <h2>Quelques épreuves à venir</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4">
                <img
                  src="athletisme.jpeg"
                  class="card-img-top"
                  alt="Athlétisme"
                />
                <div class="card-body">
                  <h5 class="card-title">Athlétisme</h5>
                  <p class="card-text">
                    Venez voir les athlètes les plus rapides du monde en action.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <img src="natation.webp" class="card-img-top" alt="Natation" />
                <div class="card-body">
                  <h5 class="card-title">Natation</h5>
                  <p class="card-text">
                    Ne manquez pas les compétitions de natation les plus
                    excitantes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <img
                  src="gymnastique.jpeg"
                  class="card-img-top"
                  alt="Gymnastique"
                />
                <div class="card-body">
                  <h5 class="card-title">Gymnastique</h5>
                  <p class="card-text">
                    Venez admirer la grâce et l'agilité des meilleurs gymnastes
                    du monde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
            
            <h1 class="text-body-emphasis">Nos offres</h1>
            <p class="col-lg-6 mx-auto mb-4">
            Découvrez nos offres spéciales pour profiter pleinement des Jeux Olympiques.
            </p>
            <a href="/plans" class="btn btn-primary px-5 mb-5" type="button">
              Nos offres
            </a>
          </div>
        </div>
      </main>
  )
}

export default landingSports