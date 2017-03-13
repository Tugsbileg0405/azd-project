$(document).ready(function() {

    $('.navbar-default-2  .nav li a').on('click', function() {
        $(this).parent().parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });

    var data_start_type = $('#langugeValue').attr('data-start-type');
    var $data_type_elem = $('[data-type=' + data_start_type + ']');
    $('.chosen-language').text($data_type_elem.text());

    $('#language li').on('click', function() {
        $('.chosen-language').text($(this).text());
    });

    var percent = 0,
        interval = 30, //it takes about 6s, interval=20 takes about 4s
        $bar = $('.transition-timer-carousel-progress-bar'),
        $crsl = $('#headerCarousel');

    $('.carousel-indicators li, .carousel-control').click(function() { $bar.css({ width: 0.5 + '%' }); });

    $('#headerCarousel').carousel({ //initialize
        interval: false,
        pause: true
    }).on('slide.bs.carousel', function() { percent = 0; });

    //This event fires immediately when the bootstrap slide instance method is invoked.
    function progressBarCarousel() {
        $bar.css({ width: percent + '%' });
        percent = percent + 0.5;
        if (percent >= 100) {
            percent = 0;
            $crsl.carousel('next');
        }
    }
    var barInterval = setInterval(progressBarCarousel, interval); //set interval to progressBarCarousel function
    if (!(/Mobi/.test(navigator.userAgent))) { //tests if it isn't mobile
        $crsl.hover(function() {
                clearInterval(barInterval);
            },
            function() {
                barInterval = setInterval(progressBarCarousel, interval);
            }
        );
    }

    $('#myTab a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#responsive').lightSlider({
        item: 4,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

    $('#lightgallery').lightGallery();

    $('#lightgallery1').lightGallery();

    $('#aimag').change(function() {
        if ($(this).val() == 'ub') {
            $(".location-content .rule-header").html('УЛААНБААТАР АЙМАГ ДАХЬ АРДЧИЛСАН ЗАЛУУЧУУДЫН ХОЛБОО');
        } else if ($(this).val() == 'ar') {
            $(".location-content .rule-header").html('АРХАНГАЙ АЙМАГ ДАХЬ АРДЧИЛСАН ЗАЛУУЧУУДЫН ХОЛБОО');
        } else if ($(this).val() == 'da') {
            $(".location-content .rule-header").html('ДАРХАН АЙМАГ ДАХЬ АРДЧИЛСАН ЗАЛУУЧУУДЫН ХОЛБОО');
        } else if ($(this).val() == 'er') {
            $(".location-content .rule-header").html('ЭРДЭНЭТ АЙМАГ ДАХЬ АРДЧИЛСАН ЗАЛУУЧУУДЫН ХОЛБОО');
        }
    });

    $("select#aimag").val("ub").change();

    $('#newsSidebar a').click(function(e) {
        e.preventDefault()
        $that = $(this);
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');
    });

});