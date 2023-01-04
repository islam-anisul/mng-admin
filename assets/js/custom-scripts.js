$(document).ready(function () {
    'use strict';

    //===== Wow Animation Setting =====//
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });

    wow.init();

    //===== Display Image Script =====//
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#rslt-img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#upld-file").change(function () {
        readURL(this);
    });

    //===== To DO List Add Task Field =====//
    $('.ad-tsk-btn').on('click', function () {
        $('div.add-tsk').slideToggle();
        return false;
    });

    //===== To Do List Deleted =====//
    $('.td-lst > li > a').on('click', function () {
        $(this).parent('li').slideUp();
        return false;
    });

    var counter = 0;
    var skns = ['grn-td', 'blu-td', 'red-td', 'ylw-td'];
    $('.add-tsk form > button').on('click', function () {
        var task_list = $('ul.td-lst');
        var task_item = $('.add-tsk form > input').val();
        var date = new Date();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var current_date = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
        if (task_item !== '' && task_item !== 'undefined') {
            if (counter == skns.length) {
                counter = 0;
            }
            $(task_list).prepend('<li><h6>' + task_item + '</h6> <span>' + current_date + '</span> <a href="#" title=""><i class="icon ion-android-delete"></i></a></li>');
            $('.td-lst > li').on('click', function () {
                $(this).toggleClass('active');
            });
            $('.add-tsk form > input').addClass('null');
            $('.add-tsk form > input').val('');
            $('.add-tsk form > input').focus();
            var attribute = $('ul.td-lst').eq(0).children('li');
            $(attribute).attr('class', skns[counter]);
            counter++;
            return false;
        }
        return false;
    });

    //===== Topbar Links =====//
    $('.topbar-lists > li > a').on('click', function () {
        $(this).parent().toggleClass('active');
        return false;
    });

    //===== TypeIt =====//
    if ($('.explr-inf > h4 span').length) {
        new TypeIt('.explr-inf > h4 span', {
            strings: ['You want this', 'You will get this'],
            speed: 200,
            breakLines: false,
            loop: true,
            waitUntilVisible: true
        }).go();
    }

    //===== Vector Map =====//
    if ($.isFunction($.fn.vectorMap)) {
        $('#vc-map').vectorMap({
            map: 'world_en',
            backgroundColor: false,
            hoverOpacity: 0.7,
            selectedColor: '#7fc4e5',
            color: '#999999',
            borderColor: '#bcbcbc',
            enableZoom: true,
            showTooltip: true,
            scaleColors: ['#C8EEFF', '#006491'],
        });
    }

    //===== Sidepanel Script =====//
    $('.sidebanel-btn').on('click', function () {
        $('.sidepanel').toggleClass('active');
        return false;
    });

    //===== Sidepanel Options Script =====*/
    $('.option-list a').on('click', function () {
        $('.option-list a').removeClass('applied');
        $(this).addClass('applied');
        return false;
    });

    //===== Theme Options Script =====*/
    $('.light-btn').on('click', function () {
        $('header, body').removeClass('dark-bg');
        return false;
    });

    $('.semi-dark-btn').on('click', function () {
        $('header').addClass('dark-bg');
        return false;
    });

    $('.dark-btn').on('click', function () {
        $('body').addClass('dark-bg');
        return false;
    });

    //===== Side Header Options Script =====*/
    $('.mini-header-btn').on('click', function () {
        $('main').removeClass('header-expand');
        $('.usr-inf').slideUp('slow');
        return false;
    });

    $('.full-header-btn').on('click', function () {
        $('main').addClass('header-expand');
        $('.usr-inf').slideDown('slow');
        return false;
    });

    //===== Search Script =====//
    $('.srch-btn').on('click', function () {
        $('.hdr-srch-bx').addClass('active');
        return false;
    });

    $('.srch-cls-btn').on('click', function () {
        $('.hdr-srch-bx').removeClass('active');
        return false;
    });

    //===== Refresh Content =====//
    $('.refrsh-btn').on('click', function () {
        $(this).parent().parent().find('div.wdgt-ldr').addClass('active').delay(3000).queue(function (next) {
            $(this).removeClass('active');
            next();
        });
        return false;
    });

    //===== Expand Content =====//
    $('.expnd-btn').on('click', function () {
        $(this).parent().parent().toggleClass('ful-wdgt');
        return false;
    });

    //===== Pricing Plan Script =====//
    $('.prc-pln').on('mouseenter', function () {
        $(this).toggleClass('active');
        $(this).children().find('ul.prc-pln-lst').slideToggle();
    });

    //===== Menu Script =====//
    $('.mnu-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.mnu-wrp').toggleClass('fadin');
        $('html').toggleClass('mnu-actv');
        return false;
    });

    //===== Header =====//
    $('.menu-btn').on('click', function () {
        $('main').toggleClass('header-expand');
        $('.usr-inf').slideToggle('slow');
        return false;
    });
    $('nav li.menu-item-has-children > a').on('click', function () {
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });

    //===== Counter Up =====//
    if ($.isFunction($.fn.counterUp)) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    //===== ToolTip =====//
    if ($.isFunction($.fn.tooltip)) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    //===== Popover =====//
    if ($.isFunction($.fn.popover)) {
        $('[data-toggle="popover"]').popover();
    }

    //===== Weather =====//
    if ($.isFunction($.fn.ideaboxWeather)) {
        $('#weather').ideaboxWeather({
            location: 'Lahore, Pakistan'
        });
    }

    //===== Scrollbar =====//
    if ($.isFunction($.fn.slimscroll)) {
        $('nav, .td-wrp, .msgs-lst-wrp, .sal-lst-wrp, .cmnts-wrp').slimscroll({});
    }

    //===== LightBox =====//
    if ($.isFunction($.fn.fancybox)) {
        $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
    }

    //===== Text Editor =====//
    if ($.isFunction($.fn.Editor)) {
        $("#text-editor").Editor();
    }

    //===== Select =====//
    if ($('select').length > 0) {
        $('select').selectpicker();
    }

    //===== TouchSpin =====//
    if ($.isFunction($.fn.TouchSpin)) {
        $('.qnty > input').TouchSpin();
    }

    //===== Count Down =====//
    if ($.isFunction($.fn.downCount)) {
        $('.cmng-tim').downCount({
            date: '12/12/2019 12:00:00',
            offset: +5
        });
    }

    //===== Count Down =====//
    if ($.isFunction($.fn.circliful)) {
        $("#upld").circliful({
            animationStep: 5,
            foregroundBorderWidth: 10,
            backgroundBorderWidth: 10,
            backgroundColor: 'rgba(255,255,255,.2)',
            foregroundColor: '#ff6966',
            fontColor: '#fff',
            textStyle: 'font-size: 40px;font-family: Barlow;font-weight: 300;',
            percent: 35,
            halfCircle: 1,
        });
    }

    //===== Accordion =====//
    $('#acordn .acrdn-cnt').hide();
    $('#acordn h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
    $('#acordn h4').on('click', function () {
        if ($(this).next().is(':hidden')) {
            $('#acordn h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
            $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
        }
    });

    $('#acordn2 .acrdn-cnt').hide();
    $('#acordn2 h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
    $('#acordn2 h4').on('click', function () {
        if ($(this).next().is(':hidden')) {
            $('#acordn2 h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
            $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
        }
    });

    $('#acordn3 .acrdn-cnt').hide();
    $('#acordn3 h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
    $('#acordn3 h4').on('click', function () {
        if ($(this).next().is(':hidden')) {
            $('#acordn3 h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
            $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
        }
    });

    //===== Owl Carousel =====//
    if ($.isFunction($.fn.owlCarousel)) {

        //=== Comments Carousel ===//
        $('.cmnts-car').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            items: 1,
            dots: true,
            slideSpeed: 15000,
            autoplayHoverPause: true,
            nav: false,
            margin: 30,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: [
      "<i class='fa fa-angle-up'></i>",
      "<i class='fa fa-angle-down'></i>"
      ]
        });

    }

    //===== Slick Carousel =====//
    if ($.isFunction($.fn.slick)) {
        //===== Product Image Carousel =====//
        $('.prd-img-car').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            slide: 'li',
            fade: true,
            asNavFor: '.prd-thumb-car'
        });
        $('.prd-thumb-car').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.prd-img-car',
            dots: false,
            arrows: false,
            slide: 'li',
            vertical: true,
            centerPadding: '0px',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
      },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
      },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
      }
      ]
        });
    }

}); //===== Document Ready Ends =====//


$(window).on('load', function () {
    'use strict';

    var topbar_height = $('.topbar').innerHeight();
    $('main').css({
        'padding-top': topbar_height
    });
    $('header').css({
        'top': topbar_height
    });

    var header_width = $('header').innerWidth();
    $('main').css({
        'padding-left': 125,
        'padding-right': topbar_height - 30
    });

    //===== Isotope =====//
    if (jQuery('.fltr-itm').length > 0) {
        if (jQuery().isotope) {
            var jQuerycontainer = jQuery('.masonry, .msonry'); // cache container
            var jQuerycontainer2 = jQuery('.msonry2'); // cache container
            jQuerycontainer.isotope({
                itemSelector: '.fltr-itm',
                columnWidth: 1,
                layoutMode: 'fitRows',
            });
            jQuerycontainer2.isotope({
                itemSelector: '.fltr-itm',
                columnWidth: 1
            });
            jQuery('.fltr-btns a, .fltr-lnks a').click(function () {
                var selector = jQuery(this).attr('data-filter');
                jQuery('.fltr-btns li, .fltr-lnks li').removeClass('active');
                jQuery(this).parent().addClass('active');
                jQuerycontainer.isotope({
                    filter: selector
                });
                jQuerycontainer2.isotope({
                    filter: selector
                });
                return false;
            });
            jQuerycontainer.isotope('layout'); // layout/layout
            jQuerycontainer2.isotope('layout'); // layout/layout
        }

        jQuery(window).resize(function () {
            if (jQuery().isotope) {
                jQuery('.masonry, .msonry, .msonry2').isotope('layout'); // layout/relayout on window resize
            }
        });
    }
}); //===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll', function () {
    'use strict';

    var menu_height3 = $('.sticky-header').innerHeight();
    var scroll = $(window).scrollTop();
    if (scroll >= menu_height3) {
        $('body').addClass('sticky-active');
    } else {
        $('body').removeClass('sticky-active');
    }
}); //===== Window onScroll Ends =====//

$(function () {
    $('#addbroker').hide();
    $('.add_broker_btn').on('click', function () {
        $('#addbroker').show();
        $('#seller_lead').hide();
    });
});
//------seller lead allocation
$(function () {
    $('.lead_alct_btn').on('click', function () {
        $('.lead_allocation').show('slow');
        $('.slct_content').hide('slow');
    });
    $('.lead_slct_btn').on('click', function () {
        $('.slct_content').show('slow');
        $('.lead_allocation').hide('slow');
    });
});
$(function () {
    $('.lead_slct_btn').click(function () {
        $('.lead_slct_btn').addClass('active_btn');
        $('.lead_alct_btn').removeClass('active_btn');
    });
    $('.lead_alct_btn').click(function () {
        $('.lead_alct_btn').addClass('active_btn');
        $('.lead_slct_btn').removeClass('active_btn');
    });
});

$('.lead_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});
$('.cns_btn').click(function () {
    $('.consul_content').show('slow');
    $('.contrc_content').hide('slow');
});
$('.contr_btn').click(function () {
    $('.contrc_content').show('slow');
    $('.consul_content').hide('slow');
});
//---------promo management

$('.promo_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});





//-------call center
$(function () {
    $('#cc_slr_btn').click(function () {
        $('#cc_slr_btn').addClass('active_btn');
        $('#cc_byr_btn').removeClass('active_btn');
        $('#cc_mtc_btn').removeClass('active_btn');
        $('#cc_asm_btn').removeClass('active_btn');
        $('#cc_dry_btn').removeClass('active_btn');
    });

    $('#cc_byr_btn').click(function () {
        $('#cc_byr_btn').addClass('active_btn');
        $('#cc_slr_btn').removeClass('active_btn');
        $('#cc_mtc_btn').removeClass('active_btn');
        $('#cc_asm_btn').removeClass('active_btn');
        $('#cc_dry_btn').removeClass('active_btn');
    });

    $('#cc_mtc_btn').click(function () {
        $('#cc_mtc_btn').addClass('active_btn');
        $('#cc_slr_btn').removeClass('active_btn');
        $('#cc_byr_btn').removeClass('active_btn');
        $('#cc_asm_btn').removeClass('active_btn');
        $('#cc_dry_btn').removeClass('active_btn');
    });

    $('#cc_asm_btn').click(function () {
        $('#cc_asm_btn').addClass('active_btn');
        $('#cc_slr_btn').removeClass('active_btn');
        $('#cc_byr_btn').removeClass('active_btn');
        $('#cc_mtc_btn').removeClass('active_btn');
        $('#cc_dry_btn').removeClass('active_btn');
    });

    $('#cc_dry_btn').click(function () {
        $('#cc_dry_btn').addClass('active_btn');
        $('#cc_slr_btn').removeClass('active_btn');
        $('#cc_byr_btn').removeClass('active_btn');
        $('#cc_mtc_btn').removeClass('active_btn');
        $('#cc_asm_btn').removeClass('active_btn');
    });

    $('#asmnt_byr').click(function () {
        $('#asmnt_byr').addClass('active_btn');
        $('#asmnt_slr').removeClass('active_btn');

    });

    $('#asmnt_slr').click(function () {
        $('#asmnt_slr').addClass('active_btn');
        $('#asmnt_byr').removeClass('active_btn');

    });

});

//------aproval center
$(function () {
    $('#apv_slr_btn').click(function () {
        $('#apv_slr_btn').addClass('active_btn');
        $('#apv_byr_btn').removeClass('active_btn');
        $('#apv_adv_btn').removeClass('active_btn');
    });

    $('#apv_byr_btn').click(function () {
        $('#apv_byr_btn').addClass('active_btn');
        $('#apv_slr_btn').removeClass('active_btn');
        $('#apv_adv_btn').removeClass('active_btn');
    });

    $('#apv_adv_btn').click(function () {
        $('#apv_adv_btn').addClass('active_btn');
        $('#apv_slr_btn').removeClass('active_btn');
        $('#apv_byr_btn').removeClass('active_btn');
    });

    $('.apv_gl_btn').click(function () {
        $(".apv_gl_btn").addClass('active_btn');
        $('.apv_mr_btn').removeClass('active_btn');
        $('.apv_reg_btn').removeClass('active_btn');
        $('.down_list_btn').removeClass('active_btn');
        $('.doc_adv_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });

    $('.apv_mr_btn').click(function () {
        $(".apv_mr_btn").addClass('active_btn');
        $('.apv_gl_btn').removeClass('active_btn');
        $('.apv_reg_btn').removeClass('active_btn');
        $('.down_list_btn').removeClass('active_btn');
        $('.doc_adv_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });

    $('.apv_reg_btn').click(function () {
        $(".apv_reg_btn").addClass('active_btn');
        $('.apv_gl_btn').removeClass('active_btn');
        $('.apv_mr_btn').removeClass('active_btn');
        $('.down_list_btn').removeClass('active_btn');
        $('.doc_adv_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });
    $('.down_list_btn').click(function () {
        $(".down_list_btn").addClass('active_btn');
        $('.apv_gl_btn').removeClass('active_btn');
        $('.apv_mr_btn').removeClass('active_btn');
        $('.apv_reg_btn').removeClass('active_btn');
        $('.doc_adv_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });
    $('.doc_adv_btn').click(function () {
        $(".doc_adv_btn").addClass('active_btn');
        $('.apv_gl_btn').removeClass('active_btn');
        $('.apv_mr_btn').removeClass('active_btn');
        $('.apv_reg_btn').removeClass('active_btn');
        $('.down_list_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });
});

$(function () {
    $('.byr_btn').click(function () {
        $('.byr_btn').addClass('active_btn');
        $('.slr_btn').removeClass('active_btn');
    });
    $('.slr_btn').click(function () {
        $('.slr_btn').addClass('active_btn');
        $('.byr_btn').removeClass('active_btn');
    });
});
$(function () {
    $('.down_mr_btn').click(function () {
        $('.down_mr_btn').addClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
        $('.down_adv_btn').removeClass('active_btn');
    });
    $('.down_agn_btn').click(function () {
        $('.down_agn_btn').addClass('active_btn');
        $('.down_mr_btn').removeClass('active_btn');
        $('.down_adv_btn').removeClass('active_btn');
        $('.doc_adv_btn').removeClass('active_btn');
    });
    $('.down_adv_btn').click(function () {
        $('.down_adv_btn').addClass('active_btn');
        $('.down_mr_btn').removeClass('active_btn');
        $('.down_agn_btn').removeClass('active_btn');
    });
});
//------reports
$(function () {
    $('.rpt_rg_btn').click(function () {
        $('#regi_report').show('slow');
        $('.add_reg_btn').show('slow');
        $('#bl_report').hide('slow');
        $('#bs_report').hide('slow');
        $('#slr_lead_report').hide('slow');
        $('#byr_lead_report').hide('slow');
        $('#user_registration').hide('slow');

    });

    $('.rpt_bl_btn').click(function () {
        $('#bl_report').show('slow');
        $('#regi_report').hide('slow');
        $('#bs_report').hide('slow');
        $('#slr_lead_report').hide('slow');
        $('#byr_lead_report').hide('slow');
        $('#user_registration').hide('slow');

    });

    $('.rpt_bs_btn').click(function () {
        $('#bs_report').show('slow');
        $('#regi_report').hide('slow');
        $('#bl_report').hide('slow');
        $('#slr_lead_report').hide('slow');
        $('#byr_lead_report').hide('slow');
        $('#user_registration').hide('slow');

    });

    $('.rpt_slr_btn').click(function () {
        $('#slr_lead_report').show('slow');
        $('#regi_report').hide('slow');
        $('#bl_report').hide('slow');
        $('#bs_report').hide('slow');
        $('#byr_lead_report').hide('slow');
        $('#user_registration').hide('slow');

    });

    $('.rpt_byr_btn').click(function () {
        $('#byr_lead_report').show('slow');
        $('#regi_report').hide('slow');
        $('#bl_report').hide('slow');
        $('#bs_report').hide('slow');
        $('#slr_lead_report').hide('slow');
        $('#user_registration').hide('slow');

    });
    $('.user_regi_btn').click(function () {
        $('#user_registration').show('slow');
        $('#regi_report').hide('slow');
        $('#bl_report').hide('slow');
        $('#bs_report').hide('slow');
        $('#slr_lead_report').hide('slow');
        $('#byr_lead_report').hide('slow');

    });



    $('.reg_slr_btn').click(function () {
        $('#regi_slr_tbl').show('slow');
        $('#regi_byr_tbl').hide('slow');
    });

    $('.reg_byr_btn').click(function () {
        $('#regi_byr_tbl').show('slow');


        $('#regi_slr_tbl').hide('slow');
    });
    $('.rpt_bl_btn').click(function () {
        $('.add_reg_btn').hide('slow');
    });
    $('.rpt_bs_btn').click(function () {
        $('.add_reg_btn').hide('slow');
    });
    $('.rpt_slr_btn').click(function () {
        $('.add_reg_btn').hide('slow');
    });
    $('.rpt_byr_btn').click(function () {
        $('.add_reg_btn').hide('slow');
    });








});
//---------overview
$(function () {
    $('.rpts_btn').click(function () {
        $('#rpts_al').show('slow');
        $('#rpt_reg').hide('slow');
        $('#rpt_sl').hide('slow');
        $('#rpt_bl').hide('slow');
    });

    $('.reg_rpt_btn').click(function () {
        $('#rpt_reg').show('slow');
        $('#rpts_al').hide('slow');
        $('#rpt_sl').hide('slow');
        $('#rpt_bl').hide('slow');
    });

    $('.sl_rpt_btn').click(function () {
        $('#rpt_sl').show('slow');
        $('#rpts_al').hide('slow');
        $('#rpt_reg').hide('slow');
        $('#rpt_bl').hide('slow');
    });

    $('.bl_rpt_btn').click(function () {
        $('#rpt_bl').show('slow');
        $('#rpts_al').hide('slow');
        $('#rpt_reg').hide('slow');
        $('#rpt_sl').hide('slow');
    });
});
//------------sellers profile
$(function () {
    $('.bp_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});
$(function () {
    $('.action_sub_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});
$(function () {
    $('.gen_sub_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});

$(function () {
    $('.gen_top_heading').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});





$(function () {
    $('#questioner_btn').click(function () {
        $('#business_questioner').show('slow');

        $('#seller_gen_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#internet_oportunity').hide('slow');
        $('#license_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');


        $('.top_btn_remov').removeClass('active_btn');
    });

    $('#legal_btn').click(function () {
        $('#legal_info').show('slow');
        $('#business_questioner').hide('slow');
        $('#seller_gen_info').hide('slow');
    });
    $('#intro_btn').click(function () {
        $('#seller_gen_info').show('slow');
        $('#business_questioner').hide('slow');
        $('#legal_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#internet_oportunity').hide('slow');
        $('#license_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
        $('.top_btn_remov').removeClass('active_btn');
    });


});




$(function () {
    $('#actn_btn').click(function () {
        location.href = '8_email.html';

    });
});






$(function () {
    $('#busi_prf_btn').click(function () {
        $('#business_questioner').show('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('.action_sub_btn').hide('slow');
        $('#franchise_profil').hide('slow');
        $('#license_oportunity').hide('slow');
        $('#internet_oportunity').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#innovation_oportunity').hide('slow');

        $('#questioner_btn').addClass('active_btn').siblings().removeClass('active_btn');

    });




    $(function () {
        $('#frnchs_prf_btn').click(function () {
            $('#franchise_profil').show('slow');
            $('#legal_tbl').hide('slow');
            $('#business_tbl').hide('slow');
            $('#com_tbl').hide('slow');
            $('#byr_mtc_tbl').hide('slow');
            $('#slr_rpt_tbl').hide('slow');
            $('#byr_intro_tbl').hide('slow');
            $('#seller_gen_info').hide('slow');
            $('.action_sub_btn').hide('slow');
            $('#business_questioner').hide('slow');
            $('#partnership_biz').hide('slow');
            $('#license_oportunity').hide('slow');
            $('#internet_oportunity').hide('slow');
            $('#innovation_oportunity').hide('slow');
        });


        $('#invtn_prf_btn').click(function () {
            $('#innovation_oportunity').show('slow');
            $('#legal_tbl').hide('slow');
            $('#business_tbl').hide('slow');
            $('#com_tbl').hide('slow');
            $('#byr_mtc_tbl').hide('slow');
            $('#slr_rpt_tbl').hide('slow');
            $('#byr_intro_tbl').hide('slow');
            $('#seller_gen_info').hide('slow');
            $('.action_sub_btn').hide('slow');
            $('#partnership_biz').hide('slow');
            $('#business_questioner').hide('slow');
            $('#license_oportunity').hide('slow');
            $('#internet_oportunity').hide('slow');
            $('#franchise_profil').hide('slow');
        });




        $('#intrnt_prf_btn').click(function () {
            $('#internet_oportunity').show('slow');
            $('#legal_tbl').hide('slow');
            $('#business_tbl').hide('slow');
            $('#com_tbl').hide('slow');
            $('#byr_mtc_tbl').hide('slow');
            $('#slr_rpt_tbl').hide('slow');
            $('#byr_intro_tbl').hide('slow');
            $('#seller_gen_info').hide('slow');
            $('.action_sub_btn').hide('slow');
            $('#partnership_biz').hide('slow');
            $('#franchise_profil').hide('slow');
            $('#business_questioner').hide('slow');
            $('#license_oportunity').hide('slow');

            $('#innovation_oportunity').hide('slow');
        });


        $('#lcns_prf_btn').click(function () {
            $('#license_oportunity').show('slow');
            $('#legal_tbl').hide('slow');
            $('#business_tbl').hide('slow');
            $('#com_tbl').hide('slow');
            $('#byr_mtc_tbl').hide('slow');
            $('#slr_rpt_tbl').hide('slow');
            $('#byr_intro_tbl').hide('slow');
            $('#seller_gen_info').hide('slow');
            $('.action_sub_btn').hide('slow');
            $('#partnership_biz').hide('slow');
            $('#franchise_profil').hide('slow');
            $('#business_questioner').hide('slow');

            $('#internet_oportunity').hide('slow');
            $('#innovation_oportunity').hide('slow');
        });

    });


    $('#legal_rec_btn').click(function () {
        $('.action_sub_btn').hide('slow');
        $('#legal_info').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#business_questioner').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#legal_tbl').show('slow');
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
    });

    $('#busins_rec_btn').click(function () {
        $('.action_sub_btn').hide('slow');
        $('#legal_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#business_questioner').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#business_tbl').show('slow');
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
    });

    $('#com_rec_btn').click(function () {
        $('.action_sub_btn').hide('slow');
        $('#legal_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#business_questioner').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('#com_tbl').show('slow');
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
    });

    $('#byr_mtch_btn').click(function () {
        $('.action_sub_btn').hide('slow');
        $('#legal_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#business_questioner').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#byr_mtc_tbl').show('slow');
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
    });

    $('#slr_rept_btn').click(function () {
        $('.action_sub_btn').hide('slow');
        $('#legal_info').hide('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#business_questioner').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('#partnership_biz').hide('slow');
        $('#slr_rpt_tbl').show('slow');
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#franchise_profil').hide('slow');
    });
    $('#actn_btn').click(function () {
        $('#questioner_btn').removeClass('active_btn');
        $('#intro_btn').removeClass('active_btn');
    });



});

$(function () {
    $('#gen_biz_btn').click(function () {
        $('#business_questioner').show('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#seller_gen_info').hide('slow');

        $('#franchise_profil').hide('slow');
        $('#license_oportunity').hide('slow');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#partnership_biz').hide('slow');
    });

    $('#prtnr_prf_btn').click(function () {
        $('#partnership_biz').show('slow');
        $('#legal_tbl').hide('slow');
        $('#business_tbl').hide('slow');
        $('#com_tbl').hide('slow');
        $('#byr_mtc_tbl').hide('slow');
        $('#slr_rpt_tbl').hide('slow');
        $('#byr_intro_tbl').hide('slow');
        $('#seller_gen_info').hide('slow');
        $('.action_sub_btn').hide('slow');
        $('#franchise_profil').hide('slow');
        $('#license_oportunity').hide('slow');
        $('#internet_oportunity').hide('slow');
        $('#innovation_oportunity').hide('slow');
        $('#business_questioner').hide('slow');
    });



});







//------user management
//manage admin------
$(function () {
    $('.usermng_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });

    $('.crnt_usr_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});
$(function () {
    $('.crnt_user_btn').click(function () {
        $('.crnt_usr_tbl').show('slow');
        $('.current_user').show('slow');
        $('.manage_group').hide('slow');
        $('.manage_permission').hide('slow');
        
        $('.suspended_user').hide('slow');
        $('.mng_grp_btn').removeClass('active_btn');
        $('.mng_permisn_btn').removeClass('active_btn');
       
        $('.suspnd_btn').removeClass('active_btn');
    });

    $('.susp_user_btn').click(function () {
        $('.suspended_user').show('slow');
        $('.manage_group').hide('slow');
        $('.manage_permission').hide('slow');
        
        $('.current_user').hide('slow');
        $('.mng_grp_btn').removeClass('active_btn');
        $('.mng_permisn_btn').removeClass('active_btn');
       
        $('.suspnd_btn').removeClass('active_btn');
    });

    $('.mng_grp_btn').click(function () {
        $('.manage_group').show('slow');
        $('.current_user').hide('slow');
        $('.manage_permission').hide('slow');
        
        $('.suspended_user').hide('slow');
        $('.curnt_user_btn').removeClass('active_btn');
        $('.susp_user_btn').removeClass('active_btn');
    });

    $('.mng_permisn_btn').click(function () {
        $('.manage_permission').show('slow');
        $('.current_user').hide('slow');
        $('.manage_group').hide('slow');
        $('.add_suer').hide('slow');
        $('.suspended_user').hide('slow');
        $('.curnt_user_btn').removeClass('active_btn');
        $('.susp_user_btn').removeClass('active_btn');
    });
});

$('.mngadmn_btn').click(function () {
    $('#mng_admin').show('slow');
    $('#slr_admin').hide('slow');
    $('#byr_admin').hide('slow');
});
//sellers admin-------
$('.mngslr_btn').click(function () {
    $('#slr_admin').show('slow');
    $('#mng_admin').hide('slow');
    $('#byr_admin').hide('slow');
});

$(function () {
    $('.scrnt_user_btn').click(function () {
        $('.scrnt_usr_tbl').show('slow');
        $('.scurrent_user').show('slow');
        $('.smanage_group').hide('slow');
        $('.smanage_permission').hide('slow');
        
        $('.ssuspended_user').hide('slow');
        $('.smng_grp_btn').removeClass('active_btn');
        $('.smng_permisn_btn').removeClass('active_btn');
       
        $('.ssuspnd_btn').removeClass('active_btn');
    });

    $('.ssusp_user_btn').click(function () {
        $('.ssuspended_user').show('slow');
        $('.smanage_group').hide('slow');
        $('.smanage_permission').hide('slow');
        
        $('.scurrent_user').hide('slow');
        $('.smng_grp_btn').removeClass('active_btn');
        $('.smng_permisn_btn').removeClass('active_btn');
       
        $('.ssuspnd_btn').removeClass('active_btn');
    });

    $('.smng_grp_btn').click(function () {
        $('.smanage_group').show('slow');
        $('.scurrent_user').hide('slow');
        $('.smanage_permission').hide('slow');
        
        $('.ssuspended_user').hide('slow');
        $('.scurnt_user_btn').removeClass('active_btn');
        $('.ssusp_user_btn').removeClass('active_btn');
    });

    $('.smng_permisn_btn').click(function () {
        $('.smanage_permission').show('slow');
        $('.scurrent_user').hide('slow');
        $('.smanage_group').hide('slow');
        $('.sadd_suer').hide('slow');
        $('.ssuspended_user').hide('slow');
        $('.scurnt_user_btn').removeClass('active_btn');
        $('.ssusp_user_btn').removeClass('active_btn');
    });
});

//buyers admin--

$('.mngbyr_btn').click(function () {
    $('#byr_admin').show('slow');
    $('#mng_admin').hide('slow');
    $('#slr_admin').hide('slow');
});
$(function () {
    $('.bcrnt_user_btn').click(function () {
        $('.bcrnt_usr_tbl').show('slow');
        $('.bcurrent_user').show('slow');
        $('.bmanage_group').hide('slow');
        $('.bmanage_permission').hide('slow');
        
        $('.bsuspended_user').hide('slow');
        $('.bmng_grp_btn').removeClass('active_btn');
        $('.bmng_permisn_btn').removeClass('active_btn');
       
        $('.bsuspnd_btn').removeClass('active_btn');
    });

    $('.bsusp_user_btn').click(function () {
        $('.bsuspended_user').show('slow');
        $('.bmanage_group').hide('slow');
        $('.bmanage_permission').hide('slow');
        
        $('.bcurrent_user').hide('slow');
        $('.bmng_grp_btn').removeClass('active_btn');
        $('.bmng_permisn_btn').removeClass('active_btn');
       
        $('.bsuspnd_btn').removeClass('active_btn');
    });

    $('.bmng_grp_btn').click(function () {
        $('.bmanage_group').show('slow');
        $('.bcurrent_user').hide('slow');
        $('.bmanage_permission').hide('slow');
        
        $('.bsuspended_user').hide('slow');
        $('.bcurnt_user_btn').removeClass('active_btn');
        $('.bsusp_user_btn').removeClass('active_btn');
    });

    $('.bmng_permisn_btn').click(function () {
        $('.bmanage_permission').show('slow');
        $('.bcurrent_user').hide('slow');
        $('.bmanage_group').hide('slow');
        $('.badd_suer').hide('slow');
        $('.bsuspended_user').hide('slow');
        $('.bcurnt_user_btn').removeClass('active_btn');
        $('.bsusp_user_btn').removeClass('active_btn');
    });
});







//-----service pack
$(function () {
    $('.toogle_price').click(function () {
        $('.toggle_menu').toggle();
    });
    $('.toogle_price1').click(function () {
        $('.toggle_menu1').toggle();
    });
    $('.toogle_price2').click(function () {
        $('.toggle_menu2').toggle();
    });
});
$(function () {
    $('.service_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
    $('.pricing_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });



    $('#mrkt_srv_btn').click(function () {
        $('.mrkt_title').show('slow');
        $('.srv_title').hide('slow');
        $('.srv_fee_title').hide('slow');
        $('#mrkt_active').show('slow');
        $('#cnslt_active').hide('slow');
        $('#broker_active').hide('slow');
    });
    $('#cnslt_srv_btn').click(function () {
        $('.srv_title').show('slow');
        $('.mrkt_title').hide('slow');
        $('.srv_fee_title').hide('slow');
        $('#cnslt_active').show('slow');
        $('#mrkt_active').hide('slow');
        $('#broker_active').hide('slow');
    });
    $('#brk_srv_btn').click(function () {
        $('.srv_fee_title').show('slow');
        $('.mrkt_title').hide('slow');
        $('.srv_title').hide('slow');
        $('#broker_active').show('slow');
        $('#mrkt_active').hide('slow');
        $('#cnslt_active').hide('slow');
    });

});
$(function () {
    $('#locat_btn').click(function () {
        $('#location').show('slow');
        $('#service').hide('slow');

    });
    $('#srv_btn').click(function () {
        $('#service').show('slow');
        $('#location').hide('slow');

    });
});
//-----buyer Profil

$(function () {
    $('#byr_prfl_btn').click(function () {
        $('#byr_details').show('slow');
        $('.detail_content').show('slow');
        $('#prchs_criteria').hide('slow');
        $('#com_record').hide('slow');
        $('#b_history_record').hide('slow');
        $('#bmatch_record').hide('slow');
        $('#mark_busines_want').hide('slow');
        $('#doc_record').hide('slow');
    });

    $('#byr_com_btn').click(function () {
        $('#com_record').show('slow');
        $('#byr_details').hide('slow');
        $('#prchs_criteria').hide('slow');
        $('#byr_details').hide('slow');
        $('#b_history_record').hide('slow');
        $('#bmatch_record').hide('slow');
        $('#mark_busines_want').hide('slow');
        $('#doc_record').hide('slow');
    });
    $('#byr_doc_btn').click(function () {
        $('#doc_record').show('slow');
        $('#byr_details').hide('slow');
        $('#prchs_criteria').hide('slow');
        $('#byr_details').hide('slow');
        $('#b_history_record').hide('slow');
        $('#bmatch_record').hide('slow');
        $('#mark_busines_want').hide('slow');
        $('#com_record').hide('slow');
    });

    $('#byr_ins_btn').click(function () {
        $('#b_history_record').show('slow');
        $('#byr_details').hide('slow');
        $('#prchs_criteria').hide('slow');
        $('#byr_details').hide('slow');
        $('#doc_record').hide('slow');
        $('#bmatch_record').hide('slow');
        $('#mark_busines_want').hide('slow');
        $('#com_record').hide('slow');
    });

    $('#byr_mtch_btn').click(function () {
        $('#bmatch_record').show('slow');
        $('#byr_details').hide('slow');
        $('#prchs_criteria').hide('slow');
        $('#byr_details').hide('slow');


        $('#mark_busines_want').hide('slow');
        $('#b_history_record').hide('slow');
    });

    $('#byr_mrkt_btn').click(function () {
        $('#mark_busines_want').show('slow');
        $('#byr_details').hide('slow');
        $('#prchs_criteria').hide('slow');
        $('#byr_details').hide('slow');

        $('#bmatch_record').hide('slow');

        $('#bmatch_record').hide('slow');
    });

    $('#byr_dtil_btn').click(function () {
        $('.detail_content').show('slow');
        $('.purchase_criteria_content').hide('slow');
    });

    $('#purchs_btn').click(function () {
        $('.purchase_criteria_content').show('slow');
        $('.detail_content').hide('slow');
    });


});

$('#lbbmodal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});



$('#mymodal1').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$('#mymodal2').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$('#mymodal3').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$('#mymodal4').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


//-------location management
$('.loc_mng_top_buttons').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});
$(function () {
    $('#mng_cntry_btn').click(function () {
        $('#cntry_mng_tbl').show('slow');
        $('#st_mng_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });

    $('#mng_st_btn').click(function () {
        $('#st_mng_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });
    $('#mng_rg_btn').click(function () {
        $('#reg_mng_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#st_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });
    $('#mng_ct_btn').click(function () {
        $('#ct_mng_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#st_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });

    $('#mng_sb_btn').click(function () {
        $('#mng_sb_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#st_mng_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });

    $('#mng_pc_btn').click(function () {
        $('#mng_pc_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#st_mng_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_trt_tbl').hide('hide');
    });

    $('#mng_trt_btn').click(function () {
        $('#mng_trt_tbl').show('slow');
        $('#cntry_mng_tbl').hide('hide');
        $('#st_mng_tbl').hide('hide');
        $('#ct_mng_tbl').hide('hide');
        $('#mng_sb_tbl').hide('hide');
        $('#reg_mng_tbl').hide('hide');
        $('#mng_pc_tbl').hide('hide');
    });
});

//---------business clasification
$(function () {
    $('.sub_tab_buttons').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});

$(function () {
    $('#mng_ind_btn').click(function () {
        $('#mng_ind_tbl').show('slow');
        $('#mng_busi_tbl').hide('slow');
        $('#mng_cat_tbl').hide('slow');
    });
    $('#mng_biztype_btn').click(function () {
        $('#mng_busi_tbl').show('slow');
        $('#mng_ind_tbl').hide('slow');
        $('#mng_cat_tbl').hide('slow');
    });
    $('#mng_cat_btn').click(function () {
        $('#mng_cat_tbl').show('slow');
        $('#mng_ind_tbl').hide('slow');
        $('#mng_busi_tbl').hide('slow');
    });
});
//-----------product pricing
$(function () {
    $('.srv_locat_btn').click(function () {
        $('#service_loc').show('slow');
        $('#pricing_cont').hide('slow');
        $('#broker_serv').hide('slow');
        $('#bserv_add_new').hide('slow');
        $('#mrk_serv').hide('slow');
        $('#srvloc_add_new').hide('slow');
    });
    $('.brk_srv_btn').click(function () {
        $('#broker_serv').show('slow');
        $('#pricing_cont').hide('slow');
        $('#service_loc').hide('slow');
        $('#bserv_add_new').hide('slow');
        $('#mrk_serv').hide('slow');
        $('#mrk_add_new').hide('slow');
        $('#srvloc_add_new').hide('slow');
    });

    $('.mrkt_srv_btn').click(function () {
        $('#mrk_serv').show('slow');
        $('#pricing_cont').hide('slow');
        $('#service_loc').hide('slow');
        $('#bserv_add_new').hide('slow');
        $('#broker_serv').hide('slow');
        $('#mrk_add_new').hide('slow');
        $('#srvloc_add_new').hide('slow');
    });

    $('.mrkt_srv_btn').click(function () {
        $('#mrk_serv').show('slow');
        $('#pricing_cont').hide('slow');
        $('#service_loc').hide('slow');
        $('#bserv_add_new').hide('slow');
        $('#broker_serv').hide('slow');
        $('#mrk_add_new').hide('slow');
        $('#srvloc_add_new').hide('slow');
    });
});

$('.br_add_btn').click(function () {
    $('#bserv_add_new').show('alow');
    $('#pricing_cont').hide('slow');
    $('#service_loc').hide('slow');
    $('#broker_serv').hide('slow');
    $('#mrk_serv').hide('slow');
    $('#mrk_add_new').hide('slow');
    $('#srvloc_add_new').hide('slow');
});

$('.mrk_add_btn').click(function () {
    $('#mrk_add_new').show('alow');
    $('#pricing_cont').hide('slow');
    $('#service_loc').hide('slow');
    $('#broker_serv').hide('slow');
    $('#mrk_serv').hide('slow');
    $('#bserv_add_new').hide('slow');
    $('#srvloc_add_new').hide('slow');
});

$('.sloc_add_btn').click(function () {
    $('#srvloc_add_new').show('alow');
    $('#pricing_cont').hide('slow');
    $('#service_loc').hide('slow');
    $('#broker_serv').hide('slow');
    $('#mrk_serv').hide('slow');
    $('#bserv_add_new').hide('slow');
    $('#mrk_add_new').hide('slow');
});

//-------product pricing add new
$(function () {
    $('.addnew_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });
});
$(function () {
    $('.add_pack_btn1').click(function () {
        $('.package1').show('slow');
        $('.package2').hide('slow');
        $('.package3').hide('slow');
    });
    $('.add_pack_btn2').click(function () {
        $('.package2').show('slow');
        $('.package1').hide('slow');
        $('.package3').hide('slow');
    });
    $('.add_pack_btn3').click(function () {
        $('.package3').show('slow');
        $('.package1').hide('slow');
        $('.package2').hide('slow');
    });
});























//===== Text Editor =====//
if ($.isFunction($.fn.Editor)) {
    $("#text-editor").Editor();
}
if ($.isFunction($.fn.Editor)) {
    $("#text-editor1").Editor();
}
if ($.isFunction($.fn.Editor)) {
    $("#text-editor2").Editor();
}
if ($.isFunction($.fn.Editor)) {
    $("#text-editor3").Editor();
}
if ($.isFunction($.fn.Editor)) {
    $("#text-editor4").Editor();
}








//-------editor button
$(function () {
    $('.text_edit_btn').click(function () {
        $('.t_edit_tbl').hide('slow');
        $('#table1').hide('slow');
        $('#table2').hide('slow');
        $('#table3').hide('slow');
        $('#table4').hide('slow');
        $('#table5').hide('slow');
        $('.text_edit_box').show('slow');
    });
});

//document management
$('#pipeline_buttons1').click(function () {
    $('.text_edit_box').hide();
});

$('#pipeline_buttons2').click(function () {
    $('.text_edit_box').hide();
});
$('#pipeline_buttons3').click(function () {
    $('.text_edit_box').hide();
});
$('#pipeline_buttons4').click(function () {
    $('.text_edit_box').hide();
});
$('#pipeline_buttons5').click(function () {
    $('.text_edit_box').hide();
});





//overview reports tbl

$(function () {
    $('.slr_reg_btn').click(function () {
        $('#Div1').show('slow');
        $('#Div2').hide('slow');
        $('#Div3').hide('slow');
        $('#Div4').hide('slow');
        $('#Div5').hide('slow');
    });


    $('.byr_reg_btn').click(function () {
        $('#Div2').show('slow');
        $('#Div1').hide('slow');
        $('#Div3').hide('slow');
        $('#Div4').hide('slow');
        $('#Div5').hide('slow');
    });

    $('.slr_ld_btn').click(function () {
        $('#Div3').show('slow');
        $('#Div1').hide('slow');
        $('#Div2').hide('slow');
        $('#Div4').hide('slow');
        $('#Div5').hide('slow');
    });



    $('.byr_ld_btn').click(function () {
        $('#Div4').show('slow');
        $('#Div1').hide('slow');
        $('#Div2').hide('slow');
        $('#Div3').hide('slow');
        $('#Div5').hide('slow');
    });

    $('.subs_btn').click(function () {
        $('#Div5').show('slow');
        $('#Div1').hide('slow');
        $('#Div2').hide('slow');
        $('#Div3').hide('slow');
        $('#Div4').hide('slow');
    });

});



//---------new banner promo
$(function () {
    $('.prm_sub_btn').click(function () {
        $('.new_promo_content').hide('slow');
        $('.text_edit_box').show('slow');
    });
});

//-----business article

$(function () {
    $('.artcle_view').click(function () {
        $('.biz_art_content').hide('slow');
        $('.text_edit_box').show('slow');
    });
});

//-------approvcal center

$(function () {
    $('.afl_mrk_btn').click(function () {
        $('#afl_mrk').show('slow');
        $('#eml_mrk').hide('slow');
        $('#seo_mrk').hide('slow');
        $('#soc_mrk').hide('slow');
    });

    $('.eml_mrk_btn').click(function () {
        $('#eml_mrk').show('slow');
        $('#afl_mrk').hide('slow');
        $('#seo_mrk').hide('slow');
        $('#soc_mrk').hide('slow');
    });
    $('.seo_mrk_btn').click(function () {
        $('#seo_mrk').show('slow');
        $('#afl_mrk').hide('slow');
        $('#eml_mrk').hide('slow');
        $('#soc_mrk').hide('slow');
    });
    $('.soc_mrk_btn').click(function () {
        $('#soc_mrk').show('slow');
        $('#afl_mrk').hide('slow');
        $('#eml_mrk').hide('slow');
        $('#seo_mrk').hide('slow');
    });
});

//------xternal afmarket
$('#afm_load').html('<object data="http://www-dev.centralhub.com.au/">');



//--------call center
$(function () {
    $('#slr_pip_btn').click(function () {
        $('#slr_pip_tbl').show('slow');
        $('#byr_pip_tbl').hide('slow');
        $('#mtc_pip_tbl').hide('slow');
        $('#assmn_tbl').hide('slow');
        $('#diary_tbl').hide('slow');
    });

    $('#byr_pip_btn').click(function () {
        $('#byr_pip_tbl').show('slow');
        $('#slr_pip_tbl').hide('slow');
        $('#mtc_pip_tbl').hide('slow');
        $('#assmn_tbl').hide('slow');
        $('#diary_tbl').hide('slow');
    });

    $('#mtc_pip_btn').click(function () {
        $('#mtc_pip_tbl').show('slow');
        $('#slr_pip_tbl').hide('slow');
        $('#byr_pip_tbl').hide('slow');
        $('#assmn_tbl').hide('slow');
        $('#diary_tbl').hide('slow');
    });

    $('#assmn_btn').click(function () {
        $('#assmn_tbl').show('slow');
        $('#slr_pip_tbl').hide('slow');
        $('#byr_pip_tbl').hide('slow');
        $('#mtc_pip_tbl').hide('slow');
        $('#diary_tbl').hide('slow');
    });



    $('#diary_btn').click(function () {
        $('#diary_tbl').show('slow');
        $('#slr_pip_tbl').hide('slow');
        $('#byr_pip_tbl').hide('slow');
        $('#mtc_pip_tbl').hide('slow');
        $('#assmn_tbl').hide('slow');
    });
});
$('.sub_tab_buttons').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});

$('.cc_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});
$(function () {
    $('#c_s_pip_btn').click(function () {
        $('#c_slr_pip_tbl').show('slow');
        $('#c_byr_pip_tbl').hide('slow');
        $('#c_mtc_pip_tbl').hide('slow');
        $('#c_assmn_tbl').hide('slow');
        $('#c_diary_tbl').hide('slow');
    });

    $('#c_b_pip_btn').click(function () {
        $('#c_byr_pip_tbl').show('slow');
        $('#c_slr_pip_tbl').hide('slow');
        $('#c_mtc_pip_tbl').hide('slow');
        $('#c_assmn_tbl').hide('slow');
        $('#c_diary_tbl').hide('slow');
    });
    $('#c_m_pip_btn').click(function () {
        $('#c_mtc_pip_tbl').show('slow');
        $('#c_slr_pip_tbl').hide('slow');
        $('#c_byr_pip_tbl').hide('slow');
        $('#c_assmn_tbl').hide('slow');
        $('#c_diary_tbl').hide('slow');
    });
    $('#c_a_btn').click(function () {
        $('#c_assmn_tbl').show('slow');
        $('#c_slr_pip_tbl').hide('slow');
        $('#c_byr_pip_tbl').hide('slow');
        $('#c_mtc_pip_tbl').hide('slow');
        $('#c_diary_tbl').hide('slow');
    });

    $('#c_diary_btn').click(function () {
        $('#c_diary_tbl').show('slow');
        $('#c_slr_pip_tbl').hide('slow');
        $('#c_byr_pip_tbl').hide('slow');
        $('#c_mtc_pip_tbl').hide('slow');
        $('#c_assmn_tbl').hide('slow');
    });
});
$('#cons_btn').click(function () {
    $('#consul_content').show('slow');
    $('#contr_content').hide('slow');
});

$('#contr_btn').click(function () {
    $('#contr_content').show('slow');
    $('#consul_content').hide('slow');
});




//-----------user regi
$('.reg_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});
$(function () {
    $('#reg_con_btn').click(function () {
        $('#reg_con_tbl').show('slow');
        $('#reg_cl_tbl').hide('slow');
        $('#reg_cu_tbl').hide('slow');
    });

    $('#reg_cl_btn').click(function () {
        $('#reg_cl_tbl').show('slow');
        $('#reg_cu_tbl').hide('slow');
        $('#reg_con_tbl').hide('slow');
    });

    $('#reg_cu_btn').click(function () {
        $('#reg_cu_tbl').show('slow');
        $('#reg_cl_tbl').hide('slow');
        $('#reg_con_tbl').hide('slow');
    });


});
//digital marketing

$('.digmrk_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});

$('.bmg_tbl_btn').click(function () {
    $('.bmg_tbl').show('slow');
    $('.client_tbl').hide('slow');
    $('.cus_tbl').hide('slow');
});
$('.cl_tbl_btn').click(function () {
    $('.client_tbl').show('slow');
    $('.bmg_tbl').hide('slow');
    $('.cus_tbl').hide('slow');
    $('.cu_tbl_btn').click(function () {
        $('.cus_tbl').show('slow');
        $('.bmg_tbl').hide('slow');
        $('.client_tbl').hide('slow');
    });
});
//-------ecommerce
$('.ecom_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});

//------shop savers
$('.sp_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});
//-------video promos
$('.vp_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});

//---------overview reports
$(function () {
    $('.digmr_btn').click(function () {
        $('#dig_markt').show('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.ecom_btn').click(function () {
        $('#ecomrc').show('slow');
        $('#dig_markt').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.sp_btn').click(function () {
        $('#shop_saver').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.entrp_btn').click(function () {
        $('#entrp_center').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.vdoprm_btn').click(function () {
        $('#vdo_promo').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.bnrpm_btn').click(function () {
        $('#banner_promo').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });

    $('.rvw_btn').click(function () {
        $('#review').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#user_regi').hide('slow');
        $('#members').hide('slow');
    });
    $('.ureg_btn').click(function () {
        $('#user_regi').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#members').hide('slow');
    });
    $('.mbrs_btn').click(function () {
        $('#members').show('slow');
        $('#dig_markt').hide('slow');
        $('#ecomrc').hide('slow');
        $('#shop_saver').hide('slow');
        $('#entrp_center').hide('slow');
        $('#vdo_promo').hide('slow');
        $('#banner_promo').hide('slow');
        $('#review').hide('slow');
        $('#user_regi').hide('slow');
    });

});
//---------overview digital market
$('.bmg_dg_btn').click(function () {
    $('.dg_bmg_tbl').show('slow');
    $('.dg_client_tbl').hide('slow');
});
$('.cl_dg_btn').click(function () {
    $('.dg_client_tbl').show('slow');
    $('.dg_bmg_tbl').hide('slow');
});
//------overiview ecommerce 
$('.bmg_ecom_btn').click(function () {
    $(".ecom_bmg_tbl").show('slow');
    $('.ecom_client_tbl').hide('slow');
});
$('.cl_ecom_btn').click(function () {
    $('.ecom_client_tbl').show('slow');
    $('.ecom_bmg_tbl').hide('slow');
});
//--------overview shopsaver tbl
$('.bmg_sp_btn').click(function () {
    $('.sp_bmg_tbl').show('slow');
    $('.sp_client_tbl').hide('slow');
});
$('.cl_sp_btn').click(function () {
    $('.sp_client_tbl').show('slow');
    $('.sp_bmg_tbl').hide('slow');
});
//----overview entreprenuer center tbl
$('.bmg_ec_btn').click(function () {
    $('.ec_bmg_tbl').show('slow');
    $('.ec_client_tbl').hide('slow');
});

$('.cl_ec_btn').click(function () {
    $('.ec_client_tbl').show('slow');
    $('.ec_bmg_tbl').hide('slow');
});
//   ------overview vdo promos
$('.bmg_vp_btn').click(function () {
    $('.vp_bmg_tbl').show('slow');
    $('.vp_client_tbl').hide('.slow');
});

$('.cl_vp_btn').click(function () {
    $('.vp_client_tbl').show('slow');
    $('.vp_bmg_tbl').hide('slow');
});
//-------overview banner promos
$('.bmg_bp_btn').click(function () {
    $('.bp_bmg_tbl').show('slow');
    $('.bp_client_tbl').hide('slow');
});
$('.cl_bp_btn').click(function () {
    $('.bp_client_tbl').show('slow');
    $('.bp_bmg_tbl').hide('slow');
});
//----------overview review tbl
$('.bmg_rvw_btn').click(function () {
    $('.rvw_bmg_tbl').show('slow');
    $('.rvw_client_tbl').hide('slow');
});
$('.cl_rvw_btn').click(function () {
    $('.rvw_client_tbl').show('slow');
    $('.rvw_bmg_tbl').hide('slow');
});
//--------overview membership
$('.bmg_mem_btn').click(function () {
    $('.mem_bmg_tbl').show('slow');
    $('.mem_client_tbl').hide('slow');
    $('.mem_cus_tbl').hide('slow');
});

$('.cl_mem_btn').click(function () {
    $('.mem_client_tbl').show('slow');
    $('.mem_bmg_tbl').hide('slow');
    $('.mem_cus_tbl').hide('slow');
});

$('.cu_mem_btn').click(function () {
    $('.mem_cus_tbl').show('slow');
    $('.mem_bmg_tbl').hide('slow');
    $('.mem_client_tbl').hide('slow');
});
//--------leads data management
$('.lead_mng_top_btn').delegate('.custom_btn', 'click', function () {
    $(this).addClass('active_btn').siblings().removeClass('active_btn');
});

$(function () {
    $('.afm_cl_btn').click(function () {
        $('#afm_cl_form').show('slow');
        $('#afm_cus_form').hide('slow');
        $('#afm_licn_form').hide('slow');
    });
    $('.afm_cus_btn').click(function () {
        $('#afm_cus_form').show('slow');
        $('#afm_cl_form').hide('slow');
        $('#afm_licn_form').hide('slow');
    });
    $('.afm_lcn_btn').click(function () {
        $('#afm_licn_form').show('slow');
        $('#afm_cl_form').hide('slow');
        $('#afm_cus_form').hide('slow');
    });
});
//--------contractors
$(function () {
    $('.lbb_btn').click(function () {
        $('.lbb_tbl').show('slow');
        $('.bprt_tbl').hide('slow');
    });

    $('.bpart_btn').click(function () {
        $('.bprt_tbl').show('slow');
        $('.lbb_tbl').hide('slow');
    });

});
//--------clients profile
$(function () {
    $('.sec_top_btn').delegate('.custom_btn', 'click', function () {
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
    });

    $('.af_btn').click(function () {
        $('#afm_profil').show('slow');
        $('#email_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#prpty_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });
    $('.eml_btn').click(function () {
        $('#email_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#prpty_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });

    $('.seo_btn').click(function () {
        $('#seo_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#email_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#prpty_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });

    $('.smm_btn').click(function () {
        $('#smm_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#email_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#prpty_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });

    $('.bz_btn').click(function () {
        $('#bizsel_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#email_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#prpty_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });

    $('.prt_btn').click(function () {
        $('#prpty_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#email_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#shop_profil').hide('slow');
    });

    $('.sp_btn').click(function () {
        $('#shop_profil').show('slow');
        $('#afm_profil').hide('slow');
        $('#email_profil').hide('slow');
        $('#seo_profil').hide('slow');
        $('#smm_profil').hide('slow');
        $('#bizsel_profil').hide('slow');
        $('#prpty_profil').hide('slow');
    });

    $(function () {
        $('.afm_cl_btn').click(function () {
            $('.afm_cl_form').show('slow');
            $('.afm_cus_form').hide('slow');
            $('.afm_licn_form').hide('slow');
        });
        $('.afm_cus_btn').click(function () {
            $('.afm_cus_form').show('slow');
            $('.afm_cl_form').hide('slow');
            $('.afm_licn_form').hide('slow');
        });
        $('.afm_lcn_btn').click(function () {
            $('.afm_licn_form').show('slow');
            $('.afm_cl_form').hide('slow');
            $('.afm_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.sp_cl_btn').click(function () {
            $('.sp_cl_form').show('slow');
            $('.sp_cus_form').hide('slow');
            $('.sp_licn_form').hide('slow');
        });
        $('.sp_cus_btn').click(function () {
            $('.sp_cus_form').show('slow');
            $('.sp_cl_form').hide('slow');
            $('.sp_licn_form').hide('slow');
        });
        $('.sp_lcn_btn').click(function () {
            $('.sp_licn_form').show('slow');
            $('.sp_cl_form').hide('slow');
            $('.sp_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.pt_cl_btn').click(function () {
            $('.pt_cl_form').show('slow');
            $('.pt_cus_form').hide('slow');
            $('.pt_licn_form').hide('slow');
        });
        $('.pt_cus_btn').click(function () {
            $('.pt_cus_form').show('slow');
            $('.pt_cl_form').hide('slow');
            $('.pt_licn_form').hide('slow');
        });
        $('.pt_lcn_btn').click(function () {
            $('.pt_licn_form').show('slow');
            $('.pt_cl_form').hide('slow');
            $('.pt_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.bz_cl_btn').click(function () {
            $('.bz_cl_form').show('slow');
            $('.bz_cus_form').hide('slow');
            $('.bz_licn_form').hide('slow');
        });
        $('.bz_cus_btn').click(function () {
            $('.bz_cus_form').show('slow');
            $('.bz_cl_form').hide('slow');
            $('.bz_licn_form').hide('slow');
        });
        $('.bz_lcn_btn').click(function () {
            $('.bz_licn_form').show('slow');
            $('.bz_cl_form').hide('slow');
            $('.bz_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.smm_cl_btn').click(function () {
            $('.smm_cl_form').show('slow');
            $('.smm_cus_form').hide('slow');
            $('.smm_licn_form').hide('slow');
        });
        $('.smm_cus_btn').click(function () {
            $('.smm_cus_form').show('slow');
            $('.smm_cl_form').hide('slow');
            $('.smm_licn_form').hide('slow');
        });
        $('.smm_lcn_btn').click(function () {
            $('.smm_licn_form').show('slow');
            $('.smm_cl_form').hide('slow');
            $('.smm_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.seo_cl_btn').click(function () {
            $('.seo_cl_form').show('slow');
            $('.seo_cus_form').hide('slow');
            $('.seo_licn_form').hide('slow');
        });
        $('.seo_cus_btn').click(function () {
            $('.seo_cus_form').show('slow');
            $('.seo_cl_form').hide('slow');
            $('.seo_licn_form').hide('slow');
        });
        $('.seo_lcn_btn').click(function () {
            $('.seo_licn_form').show('slow');
            $('.seo_cl_form').hide('slow');
            $('.seo_cus_form').hide('slow');
        });
    });

    $(function () {
        $('.eml_cl_btn').click(function () {
            $('.eml_cl_form').show('slow');
            $('.eml_cus_form').hide('slow');
            $('.eml_licn_form').hide('slow');
        });
        $('.eml_cus_btn').click(function () {
            $('.eml_cus_form').show('slow');
            $('.eml_cl_form').hide('slow');
            $('.eml_licn_form').hide('slow');
        });
        $('.eml_lcn_btn').click(function () {
            $('.eml_licn_form').show('slow');
            $('.eml_cl_form').hide('slow');
            $('.eml_cus_form').hide('slow');
        });
    });

});
//--------reports
$('.afcl_btn').click(function () {
    $('.afcl_tbl').show('slow');
    $('.afcu_tbl').hide('slow');
    $('.contrc_tbl').hide('slow');
});

$('.afcu_btn').click(function () {
    $('.afcu_tbl').show('slow');
    $('.afcl_tbl').hide('slow');
    $('.contrc_tbl').hide('slow');
});
$('.rpt_contrc_btn').click(function () {
    $('.contrc_tbl').show('slow');
    $('.afcl_tbl').hide('slow');
    $('.afcu_tbl').hide('slow');
});
//---------content management
$('.bp_btn').click(function(){
   $('.b_promo').show('slow');
    $('.b_footer').hide('slow');
});
$('.bf_btn').click(function(){
   $('.b_footer').show('slow');
    $('.b_promo').hide('slow');
});
//footer content-------
$('.foot_add_btn').click(function(){
   $('#newfooter_pop').hide('slow');
});

//subscription report

$('.subs_slr_btn').click(function(){
   $('.subs_slr').show('slow');
    $('.subs_byr').hide('slow');
    $('.subs_adv').hide('slow');
});
$('.subs_byr_btn').click(function(){
   $('.subs_byr').show('slow');
    $('.subs_slr').hide('slow');
    $('.subs_adv').hide('slow');
});

$('.subs_adv_btn').click(function(){
   $('.subs_adv').show('slow');
    $('.subs_slr').hide('slow');
    $('.subs_byr').hide('slow');
});




$('#collapseContinents').toggleClass('in', $(window).width() > 995);

$('#collapseContinents1').toggleClass('in', $(window).width() > 995);

$('#collapseContinents2').toggleClass('in', $(window).width() > 995);

$('#collapseContinents3').toggleClass('in', $(window).width() > 995);



//-------dropzone

Dropzone.options.myAwesomeDropzone = {
    //    url: upload folder url here
    dictDefaultMessage: 'Drag file here <br> Or <br> Select file from your device',
    uploadMultiple: true,
    addRemoveLinks: true,
    maxFiles: 20,

};
