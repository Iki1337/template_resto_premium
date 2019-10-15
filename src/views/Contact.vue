<template>
  <div class="contact">
    <main>
       <div class="top_secondary">
        <img src="../assets/logo.png" alt="" class="logo2">
        <h2>Nous contacter</h2>
      </div>

      <div class="corps_secondary">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20816.689189227218!2d-0.7996001042076907!3d49.2937111772698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480babe37c83dbd9%3A0x40c14484fbcd5f0!2s14400%20Tour-en-Bessin!5e0!3m2!1sfr!2sfr!4v1571141168380!5m2!1sfr!2sfr" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>


        <div class="container">
        <div class="wrapper-form row justify-content-around text-center pt-5 pb-5">

          <aside class="info col-12 col-lg-4">

            <h5>Informations pratiques</h5>
            <p>Eiusmod laboris culpa ullamco anim id consectetur amet labore incididunt ipsum ea sit pariatur.</p>
            <p>Aute anim culpa qui deserunt.</p>
            <p>Est sint exercitation incididunt culpa nulla duis ut id nostrud.</p>

            <h5>Horaires</h5>
            <p>Magna laborum sunt est esse velit consectetur duis ad.</p>
            <p><span style="font-weight:bold">Tél. + 33 (0)1 02 03 04 05.</span></p>

          </aside>

          <form action="contact.php" method="POST" class="col-12 col-lg-4">

            <div class="form-group">
              <input type="text" name="nom" id="nom" class="form-control" placeholder="Votre nom*" maxlength="10" required />
            </div>

            <div class="form-group">
              <input type="email" name="email" id="email" class="form-control" placeholder="Votre email*" required />
            </div>

            <div class="form-group">
              <textarea name="msg" id="msg" class="form-control" placeholder="Votre message*" required></textarea>
            </div>

            <button class="btn btn-form" type="reset">Réinitialiser</button><button class="btn btn-form" type="submit">Envoyer</button>
            <p>Les champs marqué d'un * sont obligatoires.</p>
          
          </form>

        </div>
        </div>

      </div>

    </main>
  </div>
</template>

<style>

.contact .top_secondary{
  background-image: url("../assets/phone-499991_1920.jpg");
  background-attachment: fixed;
}

iframe{
  border-bottom: solid 4px grey!important;
}

/* Aside */

.info h5{
  color: goldenrod;
  font-family: "CL";
  font-size: 2rem
}

/* Formulaire */

.form-group{
   margin:5px!important;
}

input, textarea{
  width: 100%;
  font-size: 23px!important;
  padding-left: 10px;
  transition: 0.5s;
}

.btn-form {
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
  font-size: 15px!important;
  margin: 5px 20px 5px 20px;
}

.btn-form:hover{
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2));
}

</style>

<script>

export default {
  name: 'contact',
  components: {
  },

  data(){
    return{
      
    }
  },

  methods:{},


  
}
</script>
