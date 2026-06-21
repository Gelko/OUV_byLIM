/**
* Template Name: Regna - v2.1.0
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  $(document).on('click', '.nav-menu a, #mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('menu-active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
      }
      if (cur_pos < 0) {
        $(".nav-menu li:first").addClass('menu-active');
      }
    });
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
  var translations = {
    sk: {
      'hero.date': '12. jún 2027',
      'nav.route': 'Trasa',
      'nav.video': 'Video',
      'nav.reports': 'Reporty',
      'nav.results': 'Výsledky',
      'nav.contact': 'Kontakt',
      'section.routeTitle': 'Trasa',
      'section.videoTitle': 'Video z OUV 2020',
      'section.galleryTitle': 'Galéria',
      'section.galleryDescription': 'Fotky z trasy Oravskej Ultra Výzvy',
      'section.results2025': 'Výsledky 2025',
      'section.results2024': 'Výsledky 2024',
      'section.results2023': 'Výsledky 2023',
      'section.results2021': 'Výsledky 2021',
      'section.results2020': 'Výsledky 2020',
      'section.results2019': 'Výsledky 2019',
      'table.name': 'Meno',
      'table.time': 'Čas',
      'section.contactTitle': 'Kontakt',
      'section.contactDescription': 'Napíšte nám na <a href="mailto:contact@ouv.sk">contact@ouv.sk</a>',
      'countdown.started': 'Odštartované'
    },
    en: {
      'hero.date': '12 June 2027',
      'nav.route': 'Route',
      'nav.video': 'Video',
      'nav.reports': 'Reports',
      'nav.results': 'Results',
      'nav.contact': 'Contact',
      'section.routeTitle': 'Route',
      'section.videoTitle': 'OUV 2020 Video',
      'section.galleryTitle': 'Gallery',
      'section.galleryDescription': 'Photos from the Oravská Ultra Výzva course',
      'section.results2025': 'Results 2025',
      'section.results2024': 'Results 2024',
      'section.results2023': 'Results 2023',
      'section.results2021': 'Results 2021',
      'section.results2020': 'Results 2020',
      'section.results2019': 'Results 2019',
      'table.name': 'Name',
      'table.time': 'Time',
      'section.contactTitle': 'Contact',
      'section.contactDescription': 'Email us at <a href="mailto:contact@ouv.sk">contact@ouv.sk</a>',
      'countdown.started': 'Started'
    }
  };

  var storageKey = 'ouv-preferred-language';
  var defaultLang = 'sk';
  var currentLang = localStorage.getItem(storageKey) || defaultLang;
  var countdownElement = document.getElementById('demo');
  var countdownDate = new Date('Jun 12, 2027 04:00:00').getTime();
  var countdownTimer = null;
  var countdownFinished = false;

  function getTranslation(lang, key) {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    return translations[defaultLang][key] || '';
  }

  function updateTranslatableContent() {
    document.documentElement.lang = currentLang;
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) {
        return;
      }
      var value = getTranslation(currentLang, key);
      if (value === '') {
        return;
      }
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = defaultLang;
    }
    currentLang = lang;
    localStorage.setItem(storageKey, currentLang);
    updateTranslatableContent();
    if (countdownFinished && countdownElement) {
      countdownElement.textContent = getTranslation(currentLang, 'countdown.started');
    }
  }

  function updateCountdown() {
    if (!countdownElement) {
      return;
    }

    var now = new Date().getTime();
    var distance = countdownDate - now;

    if (distance <= 0) {
      countdownFinished = true;
      countdownElement.textContent = getTranslation(currentLang, 'countdown.started');
      if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
      }
      return;
    }

    countdownFinished = false;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }

  function startCountdown() {
    if (!countdownElement) {
      return;
    }
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('.lang-btn');
    if (!button) {
      return;
    }
    var lang = button.getAttribute('data-lang');
    if (lang) {
      event.preventDefault();
      setLanguage(lang);
    }
  });

  setLanguage(currentLang);
  startCountdown();
});