<template>
  <div id="app">

    <div id="up"></div>
      <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark nav-custom">
        <div class="navbar-brand" to="/">
          <img src="./assets/logo.png" width="40" height="40" class="d-inline-block align-top" alt=""> Lorem Ipsum
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/" class="nav-link">Accueil<span class="sr-only">(current)</span></router-link>
          <router-link to="/presentation" class="nav-link">Présentation</router-link>
          <router-link to="/menus" class="nav-link">Menus</router-link>
          <router-link to="/photos" class="nav-link">Photos</router-link>
          <router-link to="/contact" class="nav-link">Nous contacter</router-link>
        </div>
      </div>
    </nav>
    </header>

    <transition name="fade"><router-view/></transition>

    <div class="pre-footer">
      <h5>Ne perdez pas de temps et reservez dès maintenant !</h5>
      <router-link to="/contact" class="btn btn-custom">Reservez maintenant !</router-link>
    </div>

    <footer class="container-fluid">
      <div class="row justify-content-around align-items-center">

        <aside class="col-12 col-lg-3 text-center mb-2">
          <h5>Adresse</h5>
          <p>3 bis, Route de Lorem Ipsum <br>
            14400 Caen <br>
            ©Copyright 2020 OrdiBessin</p>
        </aside>

        <aside class="col-12 col-lg-3 text-center mb-2 reseaux">
          <a href="https://www.facebook.com" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
    			<a href="https://www.twitter.com" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
    			<a href="https://www.instagram.com" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
        </aside>

        <aside class="col-12 col-lg-3 text-center mb-2">
          <a href="#up" @click.prevent="scrollTo('#up')"><font-awesome-icon :icon="['fas', 'angle-double-up']"/></a>
        </aside>

      </div>
    </footer>

  </div>
</template>

<style>

@font-face {
  font-family: "BH";
  src: url("./font/Beautiful Heart.ttf");
}

@font-face {
  font-family: "CL";
  src: url("./font/Champagne Limousines.ttf");
}

/* Barre de navigation */


.navbar-brand{
  font-family: "BH";
  font-size: 30px!important;
}

nav a{
  color: white!important;
  font-size: 22px;
  transition: 0.7s;
  font-family: "CL";
}
  
nav a:hover{
  color: gold!important;
}
  
.router-link-exact-active{ /* Cette classe apparaît sur les <router-link> lorsque l'on clique dessus */
  color: gold!important;
}

.nav-custom {
  background-color: rgba(0, 0, 0, 0.7);
}

.nav-link{
  margin-right: 10px;
}

/* pre-footer */

.pre-footer{
  background-color: rgb(189, 160, 0);
  color: #fff;
  overflow: auto;
  padding: 30px;
}

.pre-footer h5{
  float:left;
  font-family: "BH";
  font-size: 50px;
}

.pre-footer a{
  float:right;
  color: #fff!important;
}

.btn-custom {
  background-color: hsl(42, 100%, 38%) !important;
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffbb1e", endColorstr="#c18700");
  background-image: -khtml-gradient(linear, left top, left bottom, from(#ffbb1e), to(#c18700));
  background-image: -moz-linear-gradient(top, #ffbb1e, #c18700);
  background-image: -ms-linear-gradient(top, #ffbb1e, #c18700);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffbb1e), color-stop(100%, #c18700));
  background-image: -webkit-linear-gradient(top, #ffbb1e, #c18700);
  background-image: -o-linear-gradient(top, #ffbb1e, #c18700);
  background-image: linear-gradient(#ffbb1e, #c18700);
  border-color: #c18700 #c18700 hsl(42, 100%, 33.5%);
  color: #fff !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.29);
  -webkit-font-smoothing: antialiased;
  font-size: 25px!important;
  margin-top: 5px;
}

.btn-custom:hover{
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2));
}

@media screen and (max-width: 1100px) {
  .pre-footer {
    text-align: center;
  }

  .pre-footer h5{
    float:initial;
  }

  .pre-footer a{
    float:initial;
  }

}

/* Footer */

footer {
  padding-top: 10px;
  background-color: black;
  color: white;
}

footer h5{
  color: gold;
  font-family: "CL";
}

footer svg{
  color: white;
  font-size: 50px!important;
  transition: 0.5s;
}

footer svg:hover{
  color: gold;
}

footer .reseaux a{
  margin: 0 10px;
}

/* Transition router-view */

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

/* Commun aux pages */

.corps{
  background-color: #fff;
  padding-top: 15px;
}

.titre h3{
  font-family: "BH";
  font-size: 50px;
}

.top_secondary{
  overflow: auto;
  padding: 100px 0 100px 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

.top_secondary .logo2{
  width:100px;
}

.top_secondary h2{
  color: white;
  font-family: "BH";
  font-size: 6rem;
  font-weight: bold;
  margin-top: 40px;
  text-shadow: 5px 5px 5px rgba(0,0,0, 0.8);
  display: inline-block;
  vertical-align: middle;
}

.corps_secondary{
  background-color: #fff;
  padding-top: 20px;
  
}

@media screen and (max-width: 1000px) {
  .top_secondary{
    text-align: center;

  }

  .top_secondary h2{
    display:block;
    font-size: 3rem;

  }

}

</style>

<script>
export default {

    data(){

        return{
          
        }

    },

    methods:{
      scrollTo(selector){
        document.querySelector(selector).scrollIntoView({behavior:'smooth'});
      }
    }

}
</script>
