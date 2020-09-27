$('.drop-nesto-1-1').hover(function() {
    $('.nav-img-drop').css('background-image', "url('/images/amelia/slika22-min.jpg')");
})
$('.drop-nesto-1-2').hover(function() {
    $('.nav-img-drop').css('background-image', "url('/images/bianca/slika31-min-min.jpg')");
})
$('.drop-nesto-1-3').hover(function() {
    $('.nav-img-drop').css('background-image', "url('/images/ciara/slika4-min-min.jpg')");
})


const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    document.querySelector('.nav-mobile').classList.toggle('show-mobile-nav')
})