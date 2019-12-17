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
  function validasipost(){
      var uploadFile = document.getElementById("filee");
      var text = document.getElementById("create-title");
      var textarea    = document.getElementById("create-content");

      if(uploadFile.value==""||text.value==""||textarea.value==""){
          alert("PLEASE FILL OUT THE FIELD CORRRECTLY!");
          return false;
      }
      else{
          true;
      }
  }
  function tampilkanPreview(gambar,idpreview){
      var gb = gambar.files;
      for (var i = 0; i < gb.length; i++){
          var gbPreview = gb[i];
          var imageType = /image.*/;
          var preview=document.getElementById(idpreview);
          var reader = new FileReader();
          if (gbPreview.type.match(imageType)) {
              preview.file = gbPreview;
              reader.onload = (function(element) {
                  return function(e) {
                      element.src = e.target.result;
                  };
              })(preview);
              reader.readAsDataURL(gbPreview);
          }else{
              alert("Type file tidak sesuai. Khusus image.");
          }
      }
  }

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var url = "https://raw.githubusercontent.com/AmriZaman/amrizaman.github.io/master/Ajax.txt";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url , true);
  xhttp.send();
}

var modal = document.getElementById("myModal");

var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
