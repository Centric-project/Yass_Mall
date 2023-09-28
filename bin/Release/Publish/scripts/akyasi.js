$(document).ready(function () {
    var myPlayer1 = $('#myvideo-1');
    var myPlayer2 = $('#myvideo-2');

    if (myPlayer1.length > 0 && myPlayer2.length > 0) {
        myPlayer1 = videojs('myvideo-1');
        myPlayer2 = videojs('myvideo-2');

        $("#video-tab-01 .tabvdo-play").click(function () {
            myPlayer1.ready(function () {
                myPlayer1.play();
                myPlayer2.pause();
            });
        });

        $("#video-tab-02 .tabvdo-play").click(function () {
            myPlayer2.ready(function () {
                myPlayer2.play();
                myPlayer1.pause();
            });
        });

        videoWidth();
        $(window).on('resize', videoWidth);

        $('#video-tab-01').click(function () {
            $('#v-pills-tabContent > .tab-pane').removeClass('show active');
            $('#v-pills-tabContent').find('#video-01').addClass('show active')
            $(this).closest('.tab-navigation').find('.nav-link').removeClass('active')
            $(this).addClass('active');
            myPlayer2.pause();
        });
        $('#video-tab-02').click(function () {
            $('#v-pills-tabContent > .tab-pane').removeClass('show active');
            $('#v-pills-tabContent').find('#video-02').addClass('show active')
            $(this).closest('.tab-navigation').find('.nav-link').removeClass('active')
            $(this).addClass('active');
            myPlayer1.pause();
        });
    }

    //grabs the hash tag from the url
    var hash = window.location.hash;
    if (hash != "") {//checks whether or not the hash tag is set
        if ($(hash).length > 0) {
            $('#wsfyTab .nav-link').trigger("click");
            $(hash).trigger("click");
        }
    }
});

function videoWidth() {
    vdoWidth = $('.tab-player .tab-content').width();
    vdoHeight = $('.videos-tab .tab-navigation').height();
    $('.video-js').css('width', vdoWidth);
    $('.video-js').css('height', vdoHeight);
}

$('#wsfyTab .nav-link').click(function () {
    $('#wsfyTabContent > .tab-pane').removeClass('show active');
    $(this).closest('.nav-tabs').find('.nav-link').removeClass('active')
    $(this).addClass('active');
});
$('#tab-one').click(function () {
    $('#wsfyTabContent').find('#div-one').addClass('show active');
});
$('#tab-two').click(function () {
    $('#wsfyTabContent').find('#div-two').addClass('show active');
});
$('#tab-three').click(function () {
    $('#wsfyTabContent').find('#div-three').addClass('show active');
});
$('#tab-two-btn').click(function () {
    $('#wsfyTabContent > .tab-pane').removeClass('show active');
    $('#wsfyTabContent').find('#div-two').addClass('show active');
    $('#wsfyTab').find('a').removeClass('active');
    $('#wsfyTab').find('#tab-two').addClass('active');
});
$('#tab-three-btn').click(function () {
    $('#wsfyTabContent > .tab-pane').removeClass('show active');
    $('#wsfyTabContent').find('#div-three').addClass('show active');
    $('#wsfyTab').find('a').removeClass('active');
    $('#wsfyTab').find('#tab-three').addClass('active');
});

$('#wsfyTab a').click(function () {
    $('.scond-btn').removeClass('active');
});
$(".scond-btn").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#wsfyTab").offset().top
    }, 500);
});

$(".custom-accordion .btn-link").click(function () {
    $(this).closest('.accordion').find('.btn-link').addClass('collapsed');
    $(this).toggleClass('collapsed');
    $(this).closest('.accordion').find('.collapse').hide('fast');
    $(this).closest('.card').find('.collapse').toggle('fast');
});