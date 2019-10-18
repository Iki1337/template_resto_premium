<template>
  <div class="presentation">

    <main>

      <div class="top_secondary">
        <img src="../assets/logo.png" alt="" class="logo2">
        <h2>Présentation</h2>
      </div>

      <div class="corps_secondary">

        <div class="col-12 text-center titre">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
        </div>

        <div class="col-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sed eros at aliquam. Donec interdum libero sit amet diam lobortis fringilla quis id tellus. In lobortis elit a justo sodales, nec congue ligula pretium. Nunc eget tincidunt nisl. Vestibulum sit amet elit dapibus, dictum mauris eget, vehicula odio. Nullam vitae dolor posuere justo interdum rutrum nec ac purus. Suspendisse pulvinar a lacus vulputate bibendum. Morbi erat quam, consectetur eu scelerisque venenatis, hendrerit ut odio. Aenean tincidunt erat risus, sed malesuada velit feugiat ullamcorper. Duis tristique faucibus vulputate. Nulla pulvinar tempus mauris, non placerat risus rhoncus vitae. Duis non orci ac nulla egestas porta. Nulla hendrerit tortor sed eros tincidunt, sit amet dignissim metus congue. Maecenas pretium et leo vel volutpat.</p>
        </div>

        <section class="contenaire-fluid" id="avis">
    			<div class="row">
    				<div class="col-12 col-md-6 fondAvis avis1"></div>
    				
    				<div class="col-12 col-md-6 avisClient text-center d-flex flex-column justify-content-center">
    					<span><font-awesome-icon :icon="['fas', 'comments']"/></span>
    					<h5 class="my-4">Elise Dupont</h5>
    					<p><font-awesome-icon :icon="['fas', 'quote-right']"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eligendi sit facere error, eos obcaecati.</p>
    				</div>
    			</div>
    	</section>
            
        <div class="col-12 pt-4 text-center titre">
          <h3>In duis ipsum reprehenderit enim occaecat consectetur.</h3>
        </div>

        <div class="container-fluid row justify-content-center">
          <img class="illustration2 mb-3" src="../assets/bg_home.jpg" alt="">
        </div>

        <div class="container-fluid row justify-content-center">
          <p class="col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sed eros at aliquam. Nullam vitae dolor posuere justo interdum rutrum nec ac purus. Suspendisse pulvinar a lacus vulputate bibendum. Morbi erat quam, consectetur eu scelerisque venenatis, hendrerit ut odio. Aenean tincidunt erat risus, sed malesuada velit feugiat ullamcorper. Duis tristique faucibus vulputate. Nulla pulvinar tempus mauris, non placerat risus rhoncus vitae. Duis non orci ac nulla egestas porta. Nulla hendrerit tortor sed eros tincidunt, sit amet dignissim metus congue. Maecenas pretium et leo vel volutpat.</p>
        </div>

        <section id="avis">
    			<div class="row">
    				
    				<div class="col-12 col-md-6 avisClient text-center d-flex flex-column justify-content-center">
    					<span><font-awesome-icon :icon="['fas', 'comments']"/></span>
    					<h5 class="my-4">Jean Dupuit</h5>
    					<p><font-awesome-icon :icon="['fas', 'quote-right']"/> Ut deserunt culpa anim excepteur qui quis ad non veniam quis. Consectetur cupidatat qui incididunt tempor. Velit dolor culpa consectetur sunt. Laboris est voluptate mollit nisi nulla id exercitation ut.</p>
    				</div>

            <div class="col-12 col-md-6 fondAvis avis2"></div>
    			</div>
    	</section>

        <div class="wrapper-img-pres container-fluid row justify-content-center">
          <img class="illustration2" src="../assets/salmon-1238248_1920.jpg" alt="">
        </div>

        <div class="container-fluid row justify-content-center">
          <p class="col-10">Officia consequat dolor non minim incididunt sint incididunt velit non ex id. Amet labore consequat irure commodo culpa quis ullamco velit. Velit do do culpa aliqua minim nisi ut consequat sunt sunt nostrud ex ut. Velit nisi aliquip aute sunt veniam nulla voluptate ad pariatur excepteur fugiat.</p>
        </div>

      </div>

    </main>

  </div>
</template>

<style>

.presentation .top_secondary{
  background-image: url("../assets/kitchen-731351_1920.jpg");
  background-attachment: fixed;
}

#avis .row{
	max-width: 100%;
	margin: auto;
  
}

.fondAvis{
	min-height: 500px;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

.avis1{
  background-image:url("../assets/salmon-1238248_1920.jpg");
}

.avis2{
  background-image:url("../assets/coffee-841425_1920.jpg");
}

.avisClient{
	min-height: 500px;
	background-color: #e4e2d3;
  padding-bottom: 50px;
}
.avisClient span{
	font-size: 7rem;
	color:goldenrod;
}

.avisClient h5{
	font-size:30px;
	color:#888;
}

.illustration2{
  border: solid rgba(255,255,255,1.00) 5px;
  border-radius: 6px;
  transition: 0.6s;
  box-shadow: 0px 3px 20px 5px;
  z-index: 1000;
  width: 40%;
  height: auto;
  display: block;
}

.illustration2:hover{
  transform:scale(1.5);
}

</style>

<script>

export default {
  name: 'presentations',
  components: {
  },
  methods:{
      scrollTo(selector){
        document.querySelector(selector).scrollIntoView({behavior:'smooth'});
      }
  }

  
}
</script>
