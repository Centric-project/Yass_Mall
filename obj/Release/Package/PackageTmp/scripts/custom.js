var app = {};

app.videoPlayer1 = function () {
    var video1 = $("ban_video");
    video1.currentTime = 0;

    $(".whatsNewVideo-holder .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $(this).parent().find("video.tv_video").get(0).play();
        //$("#" + vdplayerId).get(0).play();
    });
    $(".whatsNewVideo-holder .pause-bt").click(function () {
        $(this).addClass("active");
        $(this).hide();
        $(this).parent().find(".play-bt").show();
        $(this).parent().find("video.tv_video").get(0).pause();
    });
    $(".slick-dots li").click(function () {
        $(this).closest('.whatsNew-slider').find(".play-bt").show();
        $(this).closest('.whatsNew-slider').find(".pause-bt").hide();

        var videoplyrs = $(this).closest('.whatsNew-slider').find("video.tv_video");
        $(videoplyrs).each(function (index) {
            $(this).get(0).pause();
        });
    });
};
app.videoPlayer2 = function () {
    var video3 = $("slider_video");
    video3.currentTime = 0;

    $(".sliderVideo-holder .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $("#slider_video").get(0).play();
    });
    $(".sliderVideo-holder .pause-bt").click(function () {
        $(this).parent().find(".play-bt").show();
        $(this).hide();
        $(this).addClass("active");
        if ($("#slider_video")) {
            if ($("#slider_video").length > 0) {
                $("#slider_video").get(0).pause(); //commented by Faraz
            }
        }
    });
    $(".slick-arrow").click(function () {
        $(this).closest('.main-slide').find(".play-bt").show();
        $(this).closest('.main-slide').find(".pause-bt").hide();
        if ($("#slider_video")) {
            if ($("#slider_video").length > 0) {
                $("#slider_video").get(0).pause();
            }
        }
    });
};
app.videoPlayer3 = function () {
    //var video2 = $("ban_video2");
    //video2.currentTime = 0; //commented by Faraz

    $(".video-box .play-bt").click(function () {
        $(this).hide();
        $(this).parent().find(".pause-bt").show();
        $(this).parent().find("video.tv_video").get(0).play();
        //$("#ban_video2").get(0).play();
    });
    $(".video-box .pause-bt").click(function () {
        $(this).addClass("active");
        $(this).hide();
        $(this).parent().find(".play-bt").show();
        $(this).parent().find("video.tv_video").get(0).pause();
    });
};
app.searchDropDown = function () {
    $('.searchbox').on('click', function (event) {
        $(this).toggleClass('open');
    });
};
app.slick = function () {
    var mydir = $("html").attr("lang");
    var rtlVal = false;
    if (mydir === 'ar') {
        rtlVal = true;
    } else {
        rtlVal = false;
    }

    var mainSlideTime = 100000;
    if (typeof _mainSlideTime !== 'undefined') { //If We Got The Value From Server Then
        if (_mainSlideTime > 0) {
            mainSlideTime = _mainSlideTime;
        }
    }
    console.log('from custom js', mainSlideTime);
    $(".main-slide").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: mainSlideTime
    });

    $(".whatsNew-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    $(".event-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    $(".feature-slider").slick({
        rtl: rtlVal,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
    $(".brand-slider").slick({
        rtl: rtlVal,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
        ]
    });
    $(".inspiration-slider").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false
    });
    $(".first-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        arrows: false,
        pauseOnHover: false
    });
    $(".second-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        dots: true,
        arrows: false,
        pauseOnHover: false
    });
    $(".forth-banner").slick({
        rtl: rtlVal,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        dots: true,
        arrows: false,
        pauseOnHover: false
    });
};

app.readyFuntions = function () {
    $(document).ready(function () {
        $("#signup").click(function () {
            $(".newsletter-choices").show();
        });
        $(".mob-options .search").click(function () {
            $(".searchbox").toggleClass("open");
        });
        //For Pagination Next/Previous Arrows Button
        $('.paging .sort-alpha-numb ul').each(function () {
            var current = $(this).find('li.active');
            if (current.index() !== 0) {
                $(this).prepend('<li class="btn-arrow btn-prev gtm-track-paging-event" name="Previous-Paging"><a href="' + current.prev().find('a').attr('href') + '" class="link"><i class="fa fa-angle-left"></i></a></li>');
            }
            if (current.index() !== $(this).find('li').length - 1) {
                $(this).append('<li class="btn-arrow btn-next gtm-track-paging-event" name="Next-Paging"><a href="' + current.next().find('a').attr('href') + '" class="link"><i class="fa fa-angle-right"></i></a></li>');
            }
        });
        $(".gtm-track-paging-event").click(function (e) {
            gtmTrackEvent_PagingClick($(this));
        });

        //When Click on Search Icon Redirect to Main Search Page of Website
        $('.search-field i.fa-search').click(function () {
            var dsValue = $("#topSearchMain").val().trim();
            if (dsValue != '') {
                gtmTrackEvent_HeaderDeskSearchClick($(this));
                GoToMainSearchPage(dsValue);
            }
        });
        //For Top Search Box on Desktop
        $("#topSearchMain").autocomplete({
            minLength: 3,
            source: function (request, response) {
                var term = request.term.toLowerCase();
                var searchDSLst = topSearchListData;
                //restructure
                //var protocol = location.protocol;
                //var slashes = protocol.concat("//");
                //var host = slashes.concat(window.location.hostname);

                $('#SearchMainDiv').show();
                $('#topSearchMainUL').empty();
                var totalLi = 0;
                for (var i = 0; i < searchDSLst.length; i++) {
                    var matchTerm = searchDSLst[i].name.toLowerCase();
                    var url = searchDSLst[i].url; //host + searchDSLst[i].url;

                    if (matchTerm.match(term)) {
                        $("#topSearchMainUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderDeskSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                        totalLi++;
                    } else {
                        if (searchDSLst[i].tags != null) {
                            for (var newI = 0; newI < searchDSLst[i].tags.length; newI++) {
                                if (searchDSLst[i].tags[newI].toLowerCase().match(term)) {
                                    $("#topSearchMainUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderDeskSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                                    totalLi++;
                                    break;
                                }
                            }
                        }
                    }
                    if (totalLi > 17)
                        break;
                }
                if (totalLi === 0) {
                    $("#topSearchMainUL").append('<li><a>No results</a></li>');
                }
            }
        }).keyup(function () {
            if ($(this).val() == '') {
                $('#SearchMainDiv').hide();
                $('#topSearchMainUL').empty();
            }
        }).blur(function () {
            setTimeout(function () {
                $('#SearchMainDiv').hide();
            }, 2000);
        }).keypress(function (e) {
            if (e.which == 13) {
                var dsValue = $("#topSearchMain").val().trim();
                if (dsValue != '') {
                    gtmTrackEvent_HeaderDeskSearchClick($(this));
                    GoToMainSearchPage($("#topSearchMain").val().trim());
                }
            }
        });
        //For Top Search Box on Mobile
        $("#topSearchMainMob").autocomplete({
            minLength: 3,
            source: function (request, response) {
                var term = request.term.toLowerCase();
                var searchDSLst = topSearchListData;

                $('#SearchMainMobDiv').show();
                $('#topSearchMainMobUL').empty();
                var totalLi = 0;
                for (var i = 0; i < searchDSLst.length; i++) {
                    var matchTerm = searchDSLst[i].name.toLowerCase();
                    var url = searchDSLst[i].url;

                    if (matchTerm.match(term)) {
                        $("#topSearchMainMobUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderMobSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                        totalLi++;
                    } else {
                        if (searchDSLst[i].tags != null) {
                            for (var newI = 0; newI < searchDSLst[i].tags.length; newI++) {
                                if (searchDSLst[i].tags[newI].toLowerCase().match(term)) {
                                    $("#topSearchMainMobUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderMobSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                                    totalLi++;
                                    break;
                                }
                            }
                        }
                    }
                    if (totalLi > 17)
                        break;
                }
                if (totalLi === 0) {
                    $("#topSearchMainMobUL").append('<li><a>No results</a></li>');
                }
            }
        }).keyup(function () {
            if ($(this).val() == '') {
                $('#SearchMainMobDiv').hide();
                $('#topSearchMainMobUL').empty();
            }
        }).blur(function () {
            setTimeout(function () {
                $('#SearchMainMobDiv').hide();
            }, 2000);
        }).keypress(function (e) {
            if (e.which == 13) {
                var dsValue = $("#topSearchMainMob").val().trim();
                if (dsValue != '') {
                    gtmTrackEvent_HeaderMobSearchClick($(this));
                    GoToMainSearchPage($("#topSearchMainMob").val().trim());
                }
            }
        });

        //For Search Box on Shop / Dine Landing Pages
        if ($('#txtSearchData').length) {
            $("#txtSearchData").autocomplete({
                minLength: 3,
                source: function (request, response) {
                    var term = request.term.toLowerCase();
                    var list = innerPgSearchData;

                    $("#search-div").show();
                    $('#search-div-ul').empty();
                    for (var i = 0; i < list.length; i++) {
                        var matchTerm = list[i].Value.toLowerCase();
                        var url = list[i].Key; //host + list[i].Key;
                        if (matchTerm.match(term)) {
                            $("#search-div-ul").append('<li><a href="' + url + '" onclick="gtmTrackEvent_SearchBrandClick($(this));" name="' + list[i].Value + '">' + list[i].Value + '</a></li>');
                        }
                    }
                }
            }).keyup(function () {
                if ($(this).val() == '') {
                    $('#search-div').hide();
                    $('#search-div-ul').empty();
                }
            });
        }

        // OnClick Social Widget (Share Post on FB, Insta etc)
        $('.product-box .share-box li a').click(function () {
            var type = $(this).data('type');
            var url = window.location.href;
            var text = encodeURIComponent($(this).data('text') + ' | Yas Mall');
            var sharer = '', width, height;

            switch (type) {
                case 'twitter': sharer = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(url) + '&text=' + text;
                    width = 500;
                    height = 310;
                    break;
                case 'facebook': sharer = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                    width = 570;
                    height = 368;
                    break;
                case 'linked': sharer = 'https://www.linkedin.com/shareArticle?summary=&title=' + text + '&mini=true&url=' + url + '&source=';
                    width = 570;
                    height = 400;
                    break;
            }
            window.open(sharer, 'share', 'width= ' + width + ',height=' + height);

            console.log("[GTM-DL]", "Track event Store Social Share Click", type);
            var data = gtmGetDlBase();
            data.p_event = 'e_socialclicks';
            data.p_buttonname = type;
            data.p_outboundurl = sharer;
            window.dataLayer.push(data);
            debugger;

            return false;
        });
    });
};

app.init = function () {
    app.slick();
    app.readyFuntions();
    app.videoPlayer1();
    app.videoPlayer2();
    app.videoPlayer3();
    app.searchDropDown();

};
document.addEventListener("DOMContentLoaded", function () {
    app.init();
});

//Redirect to Main Search Page of Website
function GoToMainSearchPage(val) {
    if (val !== '') {
        location.href = searchGoHref + '?q=' + encodeURIComponent(val);
    }
}

// var myPlayer = videojs('my-video');
// myPlayer.ready(function() {
//   myPlayer.play();
// });