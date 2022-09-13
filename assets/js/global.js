const phone_navbar = document.querySelector('.phone_navbar');

phone_navbar.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

var modalbox = document.getElementById('regisbox');

var btn = document.getElementById("gabung");

var span = document.getElementsByClassName("tutup")[0];

btn.onclick = function() {
    modalbox.classList.add('show');
}

span.onclick = function() {
    modalbox.classList.add('out');
    modalbox.classList.remove('show');
    setTimeout(function(){
        modalbox.classList.remove('out');
    }, 1000);
}