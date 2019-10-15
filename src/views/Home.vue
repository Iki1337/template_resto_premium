<template>
  <div class="home">

      <main class="container-fluid">

        <div class="top top_home">
          <img src="../assets/logo.png" alt="" class="logo">
          <h1>Lorem Ipsum</h1>
          <a href="#crsl" class='icon-scroll' @click.prevent="scrollTo('#crsl')"></a>
        </div>

        <div id="crsl" class="carousel1 row">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/salad-2150548_1920.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/barbecue-1239434_1920.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/chef-1245676_1920.jpg" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
              </div>
              </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
          </div>
        </div>

        <section class="row corps">

          <div class="col-12 text-center titre">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
          </div>

          <div class=" container">

            <div class="col-12">
              <img class="illustration" src="../assets/bg_home.jpg" width="300px" alt="">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sed eros at aliquam. Donec interdum libero sit amet diam lobortis fringilla quis id tellus. In lobortis elit a justo sodales, nec congue ligula pretium. Nunc eget tincidunt nisl. Vestibulum sit amet elit dapibus, dictum mauris eget, vehicula odio. Nullam vitae dolor posuere justo interdum rutrum nec ac purus. Suspendisse pulvinar a lacus vulputate bibendum. Morbi erat quam, consectetur eu scelerisque venenatis, hendrerit ut odio. Aenean tincidunt erat risus, sed malesuada velit feugiat ullamcorper. Duis tristique faucibus vulputate. Nulla pulvinar tempus mauris, non placerat risus rhoncus vitae. Duis non orci ac nulla egestas porta. Nulla hendrerit tortor sed eros tincidunt, sit amet dignissim metus congue. Maecenas pretium et leo vel volutpat.</p>
              <p>Etiam eget dui at ipsum eleifend iaculis. Maecenas tincidunt justo a erat dignissim lacinia. Mauris feugiat libero aliquam interdum bibendum. Etiam viverra magna sed metus venenatis accumsan. Aenean maximus elit eleifend, viverra tellus eu, convallis ante. In quam quam, vehicula scelerisque lacinia in, elementum a erat. Suspendisse potenti. Phasellus eros tortor, pulvinar et sapien ac, volutpat euismod diam. Aliquam mauris nisi, varius ut nisi in, maximus lobortis lectus. </p>
            </div>
            
          </div>

          
        </section>

      </main>

  </div>
</template>

<style>

  .home main{
    padding-top: 100px;
  }

  .home{
    background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)),
      url("../assets/bg_home.jpg");
    background-attachment: fixed;
  }

  .top{
    text-align: center;
    height: 100vh;
    }

  .top h1{
    color: white;
    font-family: "BH";
    font-size: 150px;
    font-weight: bold;
    margin-top: 40px;
    text-shadow: 5px 5px 5px rgba(0,0,0, 0.8);
  }

  .logo{
    width: 26%;
  }

  /* Bouton scroll */

  .icon-scroll, .icon-scroll:before{
    position: absolute;
    left: 49%;
  }

  .icon-scroll{
    width: 40px;
    height: 70px;
    box-shadow: inset 0 0 0 3px #fff;
    border-radius: 25px;
    transition: 0.7s;
  }

  .icon-scroll:hover{
    box-shadow: inset 0 0 0 3px gold;
  }

  .icon-scroll:before{
    content: '';
    width: 8px;
    height: 8px;
    background: gold;
    margin-left: -3px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}

/* caroussel */

.carousel1{
  border-top: #fff solid 4px;
}

.carousel1 .carousel-caption{
  text-shadow: 0 0 6px rgba(0,0,0, 0.5);
  font-weight: bold;
  font-family: "CL";
  font-size: 30px!important;
  text-align: left;
  width: 25%;
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
}

/* corps de page */

.illustration{
  float: left;
  border: solid rgba(255,255,255,1.00) 5px;
  border-radius: 6px;
  transition: 0.6s;
  box-shadow: 0px 3px 20px 5px;
  margin: 0 20px 0 0;
}

.illustration:hover{
  transform:scale(1.3);
}
  
</style>

<script>

export default {
  name: 'home',
  components: {
  },
  methods:{
      scrollTo(selector){
        document.querySelector(selector).scrollIntoView({behavior:'smooth'});
      }
  }

  
}
</script>
