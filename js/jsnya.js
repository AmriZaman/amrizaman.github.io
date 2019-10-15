console.log("jsnya.js connected");
var aktif = false;
  function navigasi(){
    let menu = document.querySelector('.burger-menu');
    let nav = document.querySelector('nav');
    if (aktif){
      menu.style.backgroundImage = "url('gambar/burger-white.png')";
      nav.classList.remove("buka");
    }else{
      menu.style.backgroundImage = "url('gambar/cross-white.png')";
      nav.classList.add("buka");
    }
    aktif = !aktif;
  }
  function validasilogin(){
      var username    = document.getElementById("useremail");
      var password    = document.getElementById("password");

      if(username.value==""||password.value==""){
          alert("PLEASE FILL OUT THE FIELD CORRRECTLY!");
          return false;
      }
      else{
          true;
      }
  }
  function validasi(){
      var username = document.getElementById("name");
      var password = document.getElementById("pass");
      var email    = document.getElementById("email");
      var date     = document.getElementById("date");

      if(username.value==""||password.value==""||email.value==""||date.value==""){
          alert("PLEASE FILL OUT THE FIELD CORRRECTLY!");
          return false;
      }
      else{
          true;
      }
  }
