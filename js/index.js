
var sticky = $('.header-sticky');

// sticky top
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("main_menus");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// end of sticky top


var searchToggle = $('.header-search-toggle');
var searchForm = $('.header-search-form');

searchForm.hide();

searchToggle.on('click', function () {
    if (searchToggle.hasClass('open')) {
        searchForm.animate({
            width: "toggle",
        });
        $(this).removeClass('open').find('i').removeClass('fa-close').addClass('fa-search');
    } else {
        searchForm.animate({
            width: "toggle",
        });
        $(this).addClass('open').find('i').removeClass('fa-search').addClass('fa-close');
    }
});
// sidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// scroll to top

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// owl-carousel
$('.owl-carousel').owlCarousel({
    items: 2,
    autoplay: true,
    margin: 0,
    loop: true,
    dots: true,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// form
$("#submit_btn").on("click", function () {
    if ($('#name').val() == '') {
        $('#name_error').html('Name field is required')
    }
    if ($('#email').val() == '') {
        $('#email_error').html('Email field is required')
    }
    if ($('#comment').val() == '') {
        $('#comment_error').html('Comment field is required')
    }


});
function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}
document.getElementById('name').onkeyup = removeWarning;
document.getElementById('email').onkeyup = removeWarning;
document.getElementById('comment').onkeyup = removeWarning;

