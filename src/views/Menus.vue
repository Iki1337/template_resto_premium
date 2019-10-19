<template>
  <div class="menus">

    <main>

      <div class="top_secondary">
        <img src="../assets/logo.png" alt="" class="logo2">
        <h2>Menus</h2>
      </div>

      <div class="corps_secondary">

        <div class="main container-fluid">

        <div class=" col-12 text-center justify-content-around titre mb-5">
          <h3 class="col-12">Lorem ipsum dolor sit amet consectetur</h3>
          <div class="row justify-content-around">
            <button type="button" class="col-12 col-sm-3 mb-1 btn btn-sauce" @click="affiche = 1">Les Entrées</button>
            <button type="button" class="col-12 col-sm-3 mb-1 btn btn-sauce" @click="affiche = 2">Les Plats</button>
            <button type="button" class="col-12 col-sm-3 mb-1 btn btn-sauce" @click="affiche = 3">Les Desserts</button></div>
        </div>


        <transition name="fade" mode="out-in" appear>
        <div class="col-12 text-center substitution mb-5" v-if="affiche === 0">
          <img src="../assets/logo.png" alt="">
        </div>
        </transition>

        <transition name="fade" mode="out-in">
        <div v-if="affiche === 1" class="masonry-menu">
          <div class="card item text-light" v-for="entree in entrees" :key="entree.id" >
            <img :src="entree.image" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">{{entree.name}}</h5>
              <p>{{entree.description}}</p>
              <p>{{entree.prix}}</p>
            </div>
          </div>
        </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div v-if="affiche === 2" class="masonry-menu">
          <div class="card item text-light" v-for="plat in plats" :key="plat.id" >
            <img :src="plat.image" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">{{plat.name}}</h5>
              <p>{{plat.description}}</p>
              <p>{{plat.prix}}</p>
            </div>
          </div>
        </div>
        </transition>

        <transition name="fade" mode="out-in">
          <div v-if="affiche === 3" class="masonry-menu">
          <div class="card item text-light" v-for="dessert in desserts" :key="dessert.id" >
            <img :src="dessert.image" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">{{dessert.name}}</h5>
              <p>{{dessert.description}}</p>
              <p>{{dessert.prix}}</p>
            </div>
          </div>
        </div>
        </transition>
        
      
        </div>

      </div>

    </main>

  </div>
</template>

<style>

.menus .top_secondary{
  background-image: url("../assets/food-3676796_1920.jpg");
  background-attachment: fixed;
}

.substitution img{
  height: 30vh;
}

/* Masonry */

.masonry-menu {
  margin: 5px auto 0 auto;
  max-width: 80%;
  column-gap: 1.5em;
  padding-bottom: 50px;
  text-align: center;
  text-shadow: 0 0 6px rgba(0,0,0, 0.8);
}

.masonry-menu h5{
  font-family: "BH";
  font-weight:bold!important;
  font-size: 35px!important;
}

.masonry-menu p{
  font-family: "CL";
  font-weight:bold!important;
  font-size: 25px!important;
}

.masonry-menu .note {
  white-space: pre-line;
}

/* The Masonry Brick */
.masonry-menu .item {
  margin: 0 0 1.5em;
  border: none;
  overflow: hidden;
  border: solid rgb(180, 177, 177) 2px!important;
  border-radius: 20px!important;
  display: inline-block!important;
}

.masonry-menu .item img{
  transition : 0.5s;
}

.item:hover img{
  transform:scale(1.2)
}

/* Masonry on medium-sized screens */
@media only screen and (min-width: 900px) {
  .masonry-menu {
    column-count: 2;
  }
}

@media only screen and (max-width: 1100px) {
  .masonry-menu h5{
    font-size: 18px!important;
  }

  .masonry-menu p{
    font-size: 18px!important;
  }
}

/* bouton sauce */
.btn-sauce{
  font-family: "BH";
  font-size:60px;
  background-image: url("../assets/sauce.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x:center;
  background-position-y:top;
}

/*transition */

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

</style>

<script>
import pic1 from "../assets/soup-1429793_1920.jpg"
import pic2 from "../assets/salad-1264107_1920.jpg"
import pic3 from "../assets/sweet-and-sour-pork-1264563_1920.jpg"
import pic4 from "../assets/food-577222_1920.jpg"
import pic5 from "../assets/goulash-3502510_960_720.jpg"
import pic6 from "../assets/salmon-1485014_1920.jpg"
import pic7 from "../assets/goulash-2872112_1920.jpg"
import pic8 from "../assets/food-4504529_1920.jpg"
import pic9 from "../assets/cream-4183408_1920.jpg"
import pic10 from "../assets/cream-2341149_1920.jpg"
import pic11 from "../assets/dessert-4469955_1920.jpg"
import pic12 from "../assets/cake-4502270_1920.jpg"

export default {
  name: 'menus',
  components: {
  },

  methods:{
      scrollTo(selector){
        document.querySelector(selector).scrollIntoView({behavior:'smooth'});
      },
  },

  data(){

        return{
          affiche:0,
          entrees : {
            "Entrée1": {
              "name": "Entrée 1",
              "index": "entree1",
              "description": "Eu ea duis anim et anim. Amet proident nulla magna sit.",
              "image":"/img/soup-1429793_1920.jpg",
              "prix": "3€10",
            },
            "Entrée2": {
              "name": "Entrée 2",
              "index": "entree2",
              "description": "Exercitation aliquip laboris qui aute irure amet commodo eiusmod tempor.",
              "image":"/img/salad-1264107_1920.jpg",
              "prix": "5.20€",
            },
            "Entrée3": {
              "name": "Entrée 3",
              "index": "entree3",
              "description": "Exercitation aliquip laboris qui aute irure amet commodo eiusmod tempor.",
              "image":"/img/sweet-and-sour-pork-1264563_1920.jpg",
              "prix": "6€30",
            },
            "Entrée4": {
              "name": "Entrée 4",
              "index": "entree4",
              "description": "Exercitation aliquip laboris qui aute irure amet commodo eiusmod tempor.",
              "image":"/img/food-577222_1920.jpg",
              "prix": "7€40",
            },
          },
          plats : {
            "Plat1": {
              "name": "Plat 1",
              "index": "plat1",
              "description": "Mollit dolor est labore eu magna eiusmod aute est aliquip quis.",
              "image":"/img/goulash-3502510_960_720.jpg",
              "prix": "8€50",
            },
            "Plat2": {
              "name": "Plat 2",
              "index": "plat2",
              "description": "Occaecat occaecat eu elit qui dolor commodo qui irure cillum.",
              "image":"/img/salmon-1485014_1920.jpg",
              "prix": "9€60",
            },
            "Plat3": {
              "name": "Plat 3",
              "index": "plat3",
              "description": "Occaecat occaecat eu elit qui dolor commodo qui irure cillum.",
              "image":"/img/goulash-2872112_1920.jpg",
              "prix": "10€70",
            },
            "Plat4": {
              "name": "Plat 4",
              "index": "plat4",
              "description": "Occaecat occaecat eu elit qui dolor commodo qui irure cillum.",
              "image":"/img/food-4504529_1920.jpg",
              "prix": "11€80",
            },
          },
          desserts : {
            "Dessert1": {
              "name": "Dessert 1",
              "index": "dessert1",
              "description": "Do consectetur ut laborum commodo aliquip. Sunt cillum nostrud aute incididunt occaecat sint qui veniam.",
              "image":"/img/cream-4183408_1920.jpg",
              "prix": "2€10",
            },
            "Dessert2": {
              "name": "Dessert 2",
              "index": "dessert2",
              "description": "Cillum cupidatat tempor consequat pariatur tempor culpa velit irure anim.",
              "image":"/img/cream-2341149_1920.jpg",
              "prix": "3€20",
            },
            "Dessert3": {
              "name": "Dessert 3",
              "index": "dessert3",
              "description": "Cillum cupidatat tempor consequat pariatur tempor culpa velit irure anim.",
              "image":"/img/dessert-4469955_1920.jpg",
              "prix": "4€30",
            },
            "Dessert4": {
              "name": "Dessert 4",
              "index": "dessert4",
              "description": "Cillum cupidatat tempor consequat pariatur tempor culpa velit irure anim.",
              "image":"/img/cake-4502270_1920.jpg",
              "prix": "5€40",
            },
          }
        }
      }
  }
</script>
