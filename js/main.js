$(document).ready(function() {


var owl = $("#owl-demo");
  owl.owlCarousel({
        slideSpeed: 900,
        itemsCustom: [
            [0, 3],
            [400, 3],
            [500, 3],
            [620, 3],
            [1200, 5],
           
        ],
        pagination : false
    });
  // Custom Navigation Events
  $("#nextskill").click(function(){
    owl.trigger('owl.next');
  })
  $("#prevskill").click(function(){
    owl.trigger('owl.prev');
  })




  // Animate scrolling on hire me button
    $('#down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#me").offset().top
        },1000,'easeInOutQuart');
    });



    $('a[scroll="yes"]').on('click', function(e) {
        e.preventDefault();
        to = $(this).attr('to');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        },1000,'easeInOutQuart');



    });






    skills = $('.bar');
    $.each(skills,function(i,item){
        
    })


    $(window).scroll(function () {
    
        /* checar a localização dos elementos */
        $('.bar').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* se o objeto estiver completamente "scrollado" pra dentro da janela, fazer o fade_in*/
            if (bottom_of_window > bottom_of_object) {
                console.log('tela');
                alt = $(this).attr('data-height');
                
                altura = (80*alt/100)

                    $(this).css('height',altura+'%');

            }

        });

    });



	var windowWidth = $(window).width();
	if (windowWidth > 1024) {
        $('.video-wrap').empty();
        var videobackground = new $.backgroundVideo($('.video-wrap'), {
            "align": "centerXY",
            "width": 1280,
            "height": 720,
            "path": "upload/video/",
            "filename": "video",
            "types": ["mp4","ogg","webm"]
        });
	}
});