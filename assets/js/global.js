const phone_navbar = document.querySelector('.phone_navbar');

phone_navbar.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

 var modalbox = document.getElementById("regisbox");

 var btn = document.getElementById("gabung");

 var span = document.getElementsByClassName("tutup")[0];

 btn.onclick = function () {
     modalbox.style.display = "block";
 }

 span.onclick = function() {
     modalbox.style.display = "none";
 }

 window.onclick = function(event) {
     if (event.target == modalbox) {
         modalbox.style.display = "none";
     }
 }

