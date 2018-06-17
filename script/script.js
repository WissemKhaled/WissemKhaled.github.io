
// Navigation Barre
$(document).ready(function () {
    $('.menu-button>a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        let target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    let scrollPos = $(document).scrollTop();
    $('.menu-button>a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
    });
}

//KONAMI Code
var k = [38, 38, 40, 40, 37, 39, 37, 39,66,65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
           console.log('Konami code validé =D');
            alert('Hey ! On fait une ranked ? :D');
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});

//Alert Email
$(document).on("click", ".footer-button>li>a", function () {
    alert('Mon adresse Email : wissemkhaled69@gmail.com (Le temps que j\'implémente un formulaire)');
});
