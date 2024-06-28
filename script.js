
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var icon = document.getElementsByClassName("icon");
for (var i = 0 ; i < icon.length; i++) {
    icon[i].addEventListener('click' , displayTimelineContent , false ); 
}

function displayTimelineContent() {
    var timelineContent = this.parentNode.nextElementSibling;
    var cardTimeline = timelineContent.parentNode.parentNode;
    var iconBg = this.children[0];

    timelineContent.style.display = 'block';
    cardTimeline.style.height = 'auto';

    if(cardTimeline.className == 'bloc-timeline') {
        cardTimeline.classList.add('active');
        timelineContent.style.display = 'block';
        cardTimeline.style.height = 'auto';
        iconBg.style.display = 'block';
    } else {
        cardTimeline.classList.remove('active');
        timelineContent.style.display = 'none';
        iconBg.style.display = 'none';
        cardTimeline.style.height = '135px';
    }
}

var news = document.getElementsByClassName("news-container");
for (var i = 0 ; i < news.length; i++) {
    news[i].addEventListener('mouseover' , displayNewsContent , false ); 
}

function displayNewsContent() {
    if(this.className == 'news-container') {
        var newsIsActive = document.getElementsByClassName("news-container active");
        if(newsIsActive.length > 0) newsIsActive[0].classList.remove('active');
    } 
}

var card = document.getElementsByClassName("card");
var cardIsActive = document.getElementsByClassName("card active");
for (var i = 0 ; i < card.length; i++) {
    card[i].addEventListener('mouseover' , displayCardContent , false ); 
}

function displayCardContent() {
    if(this.className == 'card') {
        if(cardIsActive.length > 0) cardIsActive[0].classList.remove('active');
    } 
}
