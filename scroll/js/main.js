// navメニュー開閉
document.addEventListener("DOMContentLoaded", function () {
  let splitHdrSpBtn = document.querySelector(".splitHdrSpBtn");

  splitHdrSpBtn.addEventListener("click", function () {
    let splitHdr = document.querySelector(".splitHdr");
    if (splitHdr.classList.contains("is-active")) {
      splitHdr.classList.remove("is-active");
    } else {
      splitHdr.classList.add("is-active");
    }
  });
});

// アンカースクロール
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    const targetId = $(this).attr('href');
    const target = $(targetId);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 300);
    }
  });
});

// スクロールBGアニメーション
$(function () {
  let splitSlider = $('.splitSlider');
  let scrollSecEle = $('.js-scrollPoint');
  let scroll = $(this).scrollTop();
  let windowH = $(window).height();

  $(window).scroll(function () {
    scroll = $(this).scrollTop();

    $.each(scrollSecEle, function(i, val) {
      let offset = $(val).offset().top;
      let addCls = `is-${$(val).attr('id')}`;
      
      if (scroll > (offset - (windowH / 2))) {
        splitSlider.addClass(addCls);
      } else {
        splitSlider.removeClass(addCls);
      }
    });

  });
});
