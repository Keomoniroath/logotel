
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var number = document.getElementsByClassName("number");
var chevron = document.getElementsByClassName("chevron");
var timer = setInterval(autoPlay, 5000);

function nextSlide(n) {
    showSlides(n, null);
}

function currentSlide(n) {
    showSlides(null, n);
}

function showSlides(n, idSlide) {
    var i;
    var activeSlide = document.getElementsByClassName("active-slide");
    var id = activeSlide[0].id;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" active-slide", "");
    }
    for (i = 0; i < number.length; i++) {
        number[i].className = number[i].className.replace(" active", "");
    }

    if(idSlide == null) {
        if(id == 3 && n == 1) {
            nextId = 0;
        } else if (id == 0 && n < 0) {
            nextId = 3;
        }
        else {
            nextId = parseInt(id) + n;
        }
    } else {
        nextId = idSlide;
    }

    slides[nextId].style.display = "block";
    number[nextId].className += " active";
    slides[nextId].className += " active-slide";

    // Clear autoplay interval and reset at 5000
    clearInterval(timer);
    timer = setInterval(autoPlay, 5000);
}

// Autoplay to carousel
function autoPlay() {
    var activeSlide = document.getElementsByClassName("active-slide");
    var id = activeSlide[0].id;
    var nextId;

    if(id == 3) {
        nextId = 0;
    } else {
        nextId = parseInt(id) + 1;
    }

    activeSlide[0].style.display = "none";
    activeSlide[0].className = activeSlide[0].className.replace(" active-slide", "");
    slides[nextId].style.display = "block";
    slides[nextId].className += " active-slide";
    number[nextId].className += " active";
    number[id].className = number[id].className.replace(" active", "");
}

// Show timeline content on click
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
        var mobile = window.matchMedia("(max-width: 450px)");
        if (mobile.matches) {
            cardTimeline.style.height = '90px';
        } else {
            cardTimeline.style.height = '135px';
        }
    }
}

//Remove active state for middle news
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

//Remove active state for first tab
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

// Show mobile menu
var burgerMenu = document.getElementsByClassName("burger-icon");
var close = document.getElementsByClassName("close");
var mobileMenu = document.getElementsByClassName("mobile-menu-content");
var blocLogo = document.getElementsByClassName("bloc-logo");
burgerMenu[0].addEventListener('click' , displayMobileMenu , false ); 
close[0].addEventListener('click' , closeMobileMenu , false ); 

function displayMobileMenu() {
    mobileMenu[0].style.display = 'flex';
    blocLogo[0].style.display = 'none';
}

function closeMobileMenu() {
    mobileMenu[0].style.display = 'none';
    blocLogo[0].style.display = 'flex';
}
