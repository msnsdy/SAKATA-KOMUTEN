$(function() {
  /* ハンバーガーメニューの動き */
  $('.hamburger-icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $('.hamburger-box').toggleClass('is-open');
    $("body").toggleClass('fixed');
    return false;
  })

  /* グローバルメニューのスクロール */
  //#から始まるURLがクリックされた時
  $('a[href^="#"]').click(function () {
    let header = $(".header").innerHeight();
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  /* ハンバーガーメニューリンクをクリックしたらメニューを閉じる */
  $('.hamburger-nav-item a[href]').on('click', function() {
    $('.hamburger-icon').removeClass('is-open');
    $('.hamburger-box').removeClass('is-open');
    $("body").removeClass('fixed');
  });

  /* ローディングアニメーション */
  $(window).on('load', function () {
    $('.loading').delay(900).fadeOut(800);
    $('.loading-logo').delay(600).fadeOut(300);
  });

})