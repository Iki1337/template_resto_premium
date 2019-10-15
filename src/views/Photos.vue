<template>
  <div class="photos">
    <main>
       <div class="top_secondary">
        <img src="../assets/logo.png" alt="" class="logo2">
        <h2>Photos</h2>
      </div>

      <div class="corps_secondary">
        
        <div class="masonry-photos">
          <div class="card item text-light" v-for="image in images" :key="image.id" @click="gallerie(image.src, image.description)">
            <img :src="image.src" class="card-img-top" alt="...">
          </div>
        </div>

        
        <div class="text-center" id="afficheGallerie">
          <img src="../assets/logo.png" alt="">
          <h5 class="card-title">Lorem quis nostrud officia mollit culpa.</h5>
        </div>

      </div>

    </main>
  </div>
</template>

<style>

.photos .top_secondary{
  background-image: url("../assets/camera-514992_1920.jpg");
  background-attachment: fixed;
}

/* Masonry */

.masonry-photos {
  margin: 5px auto 0 auto;
  max-width: 80%;
  column-gap: 1.5em;
  padding-bottom: 50px;
  text-align: center;
  text-shadow: 0 0 6px rgba(0,0,0, 0.8);
}

/* The Masonry Brick */
.masonry-photos .item {
  margin: 0 0 1.5em;
  border: none;
  overflow: hidden;
  border: solid rgb(180, 177, 177) 2px!important;
  border-radius: 20px!important;
}

.masonry-photos .item img{
  transition : 0.5s;
}

.item:hover img{
  transform:scale(1.2)
}

/* Masonry on large screens */
@media only screen and (min-width: 1377px) {
  .masonry-photos {
    column-count: 6;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1376px){
  .masonry-photos {
    column-count: 4;
  }
}

/* Gallerie */

#afficheGallerie img{
  width: 50%;
  margin-bottom: 50px;
  border: solid rgba(255,255,255,1.00) 5px;
  border-radius: 6px;
  transition: 0.6s;
  box-shadow: 0px 3px 20px 5px;
  z-index: 1000;
}

#afficheGallerie h5{
  margin-bottom: 80px;
  font-family: "CL";
  font-size: 2rem
}

#afficheGallerie img:hover{
  transform:scale(1.1);
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
  name: 'photos',
  components: {
  },

  data(){
    return{
      images : {
            "img1": {
              "src": "/img/soup-1429793_1920.jpg",
              "description": "Duis elit commodo laborum minim eu do eiusmod reprehenderit in cupidatat proident officia esse.",
            },
            "img2": {
              "src": "/img/salad-1264107_1920.jpg",
              "description": "Cillum laborum quis ea officia in ullamco dolore cupidatat.",
            },
            "img3": {
              "src": "/img/sweet-and-sour-pork-1264563_1920.jpg",
              "description": "Veniam incididunt quis dolor minim officia ex eiusmod nulla commodo cupidatat proident.",
            },
            "img4": {
              "src": "/img/food-577222_1920.jpg",
              "description": "Enim in voluptate commodo incididunt qui quis adipisicing reprehenderit nostrud enim officia eu.",
            },
            "img5": {
              "src": "/img/goulash-3502510_960_720.jpg",
              "description": "Sint nostrud ullamco proident do consequat dolore.",
            },
            "img6": {
              "src": "/img/salmon-1485014_1920.jpg",
              "description": "Amet Lorem est labore eu elit ad sunt.",
            },
            "img7": {
              "src": "/img/goulash-2872112_1920.jpg",
              "description": "Incididunt tempor sunt minim nulla magna ex et exercitation ad enim culpa mollit velit culpa.",
            },
            "img8": {
              "src": "/img/food-4504529_1920.jpg",
              "description": "Nisi ut amet dolor quis veniam ipsum commodo ex magna irure exercitation magna culpa commodo.",
            },
            "img9": {
              "src": "/img/cream-4183408_1920.jpg",
              "description": "Pariatur consequat id sint in nostrud commodo excepteur voluptate Lorem id non adipisicing laborum incididunt.",
            },
            "img10": {
              "src": "/img/cream-2341149_1920.jpg",
              "description": "Officia nostrud mollit tempor duis duis dolore ullamco anim.",
            },
            "img11": {
              "src": "/img/dessert-4469955_1920.jpg",
              "description": "Ea sunt velit amet mollit non elit laborum proident labore deserunt veniam laborum enim.",
            },
            "img12": {
              "src": "/img/cake-4502270_1920.jpg",
              "description": "Reprehenderit duis exercitation mollit duis quis esse cupidatat.",
            },
          },
    }
  },

  methods:{
      gallerie(src, dscr){
        let div = document.getElementById("afficheGallerie");
        div.innerHTML="";

        let img = document.createElement("img");
        let h5 = document.createElement("h5");

        img.setAttribute('src', src);
        h5.textContent = dscr;

        div.appendChild(img);
        div.appendChild(h5);
      },
  },


  
}
</script>
