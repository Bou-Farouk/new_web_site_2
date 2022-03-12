<template>
  <div class="Form">
    <div class="container">
      <div class="side col-lg-4">
        <img src="../assets/login.jpg" alt="login" />
      </div>
      <form
        action=""
        method="get"
        class="form col-lg-6"
        @submit.prevent="submitForm"
      >
        <h2>Se connecter</h2>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Username"
        />
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Login"
          id="submit"
          class="btn btn-primary"
        />
        <a href="#">mot de passe oublie</a>
      </form>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* start form */
.container {
  overflow: hidden;
  height: 500px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  padding: 0 0 0 0;
}
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  background-color: #fff;
  float: right;
}
.side {
  float: left;
}
.side img {
  width: 150%;
}
.form h2 {
  font-size: 30px;
  margin: 30px;
  color: #000;
}
.form .form-control {
  width: 70%;
  padding: 8px;
  margin: 20px;
  border: 1px solid #000;
  outline: none;
  border-radius: 10px;
}
#submit {
  padding: 10px 30px;
  width: 70%;
  margin-top: 30px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 10px;
}
#submit:hover {
  cursor: pointer;
  background-color: #c37543;
}
.form a {
  text-decoration: none;
  color: #000;
  margin-top: 20px;
  color: #000;
}
.form a:hover {
  color: #11088d;
}
/* end form */
</style>
