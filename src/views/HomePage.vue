<template>
  <div class="home">
    <!-- start section one -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-3"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img1.jpg" class="d-block w-100" alt="img1" />
        </div>
        <div class="carousel-item">
          <img src="../assets/img2.jpg" class="d-block w-100" alt="img2" />
        </div>
        <div class="carousel-item">
          <img src="../assets/img3.jpg" class="d-block w-100" alt="img3" />
        </div>
        <div class="carousel-item">
          <img src="../assets/img6.jpg" class="d-block w-100" alt="img4" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- end section one -->
    <!-- start section two -->
    <div
      class="row row-cols-1 row-cols-md-3 g-3 p-5 mt-2"
      style="background-color: #0b5ed7; margin-left: 0px; margin-right: 0px"
    >
      <div class="col">
        <div class="card">
          <img src="../assets/database.jpg" class="card-img-top" alt="DB" />
          <div class="card-body">
            <h5 class="card-title">Administrateur Base de Données</h5>
            <p class="card-text">
              Les administrateurs de bases de données utilisent des logiciels
              spécialisés pour stocker et organiser les données. Le rôle peut
              inclure la planification de la capacité, l'installation, la
              configuration, la conception de la base de données, la migration,
              la surveillance des performances, la sécurité, le dépannage, ainsi
              que la sauvegarde et la récupération des données
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Database_administrator"
              target="_blank"
              class="btn btn-primary"
              >Lire plus</a
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/devweb.jpg" class="card-img-top" alt="DEVWEB" />
          <div class="card-body">
            <h5 class="card-title">Developeure web</h5>
            <p class="card-text">
              Le développement Web est le travail impliqué dans le développement
              d'un site Web pour Internet (World Wide Web) ou un intranet (un
              réseau privé). Le développement Web peut aller du développement
              d'une simple page statique unique de texte brut à des applications
              Web complexes, des entreprises électroniques et des services de
              réseaux sociaux.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Web_development"
              target="_blank"
              class="btn btn-primary"
              >Lire plus</a
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/secu.jpg" class="card-img-top" alt="SECU" />
          <div class="card-body">
            <h5 class="card-title">Administrateur sécurité</h5>
            <p class="card-text">
              La sécurité informatique, la cybersécurité ou la sécurité des
              technologies de l'information est la protection des systèmes et
              réseaux informatiques contre la divulgation d'informations, le vol
              ou l'endommagement de leur matériel, de leurs logiciels ou de
              leurs données électroniques, ainsi que contre la perturbation ou
              la mauvaise direction des services qu'ils fournissent.
            </p>
            <a
              href="https://fr.wikipedia.org/wiki/Administrateur_s%C3%A9curit%C3%A9"
              target="_blank"
              class="btn btn-primary"
              >Lire plus</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end section two -->
    <!-- start section three -->
    <div class="container contact">
      <!-- contact form -->
      <div class="form">
        <div class="mb-3 pt-4">
          <label for="exampleFormControlInput1" class="form-label"
            >Votre email</label
          >
          <input
            type="email"
            class="form-control"
            style="width: 350px"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Votre Message</label
          >
          <textarea
            class="form-control"
            style="width: 350px"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <a href="....." class="btn btn-primary mt-2">Envoyer</a>
        </div>
        <!-- phone -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-telephone"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          /></svg
        ><span>: 021-53-68-28/29</span>
        <!-- facebook -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
          font-size="10px"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          /></svg
        ><span>: www.facebook.com/INSFP-Mohamed-Tayeb-Boucenna</span>
      </div>
      <!-- map -->
      <div class="map d-none d-lg-block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4521.220210921515!2d3.0865475650796417!3d36.746919835023725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2a8ae4b2dbb%3A0x419f6cc177b8d3ac!2sINSFP%20MOHAMADIA!5e0!3m2!1sen!2sdz!4v1646997030445!5m2!1sen!2sdz"
          width="500"
          height="350"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <!-- end section three -->
  </div>
</template>

<style scoped>
.contact {
  display: flex;
}
.contact .form .map {
  width: 50%;
  margin-top: 20px;
}
.contact .map {
  margin-top: 10px;
}
.contact .form {
  margin-right: 50px;
}
.contact .form span {
  margin-left: 5px;
  margin-right: 10px;
}
/* @media (max-width: 760px) {
  div.map {
    display: none;
  }
} */
</style>
