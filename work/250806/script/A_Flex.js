// MenuBar Click Event
$("#main-menu>li").mouseenter(function() {
    $(".sub_menu").stop().slideDown(500);
});

$("#main-menu>li").mouseleave(function() {
    $(".sub_menu").stop().slideUp(500);
});

// image slide Event
$(function(){
  const slides = $("#slideImage > img");
  let current = 0;
  const total   = slides.length;
  const height  = 300;
  const duration = 800;
  const delay    = 2500;

  slides.css({ top: height + "px" })
        .eq(0)
        .css({ top: "0px" })
        .addClass("active");

  function autoSlide(){

    slides.eq(current)
          .stop(true)
          .animate({ top: -height + "px" }, duration);
    
    current = (current + 1) % total;
    slides.eq(current)
          .css({ top: height + "px" })
          .stop(true)
          .animate({ top: "0px" }, duration);
  }

  const timer = setInterval(autoSlide, delay);
});

// Notice & Gallery Event
$(function(){
  const $noticeBtn  = $("#noticeBox");
  const $galleryBtn = $("#galleryBox");
  const $noticeCt   = $("#noticeContent");
  const $galleryCt  = $("#galleryContent");

  $noticeBtn.add($galleryBtn).click(function(){
    $galleryCt.css({display: "flex"});
    const isNotice = $(this).is($noticeBtn);

    $noticeCt.toggle(isNotice);
    $galleryCt.toggle(!isNotice);

    $noticeBtn.toggleClass("active", isNotice);
    $galleryBtn.toggleClass("active", !isNotice);
  });
});

// PopUp Event
$(function() {
    $(".open-popup").click(function(e) {
        e.preventDefault();
        console.log();
        let layer = $("<div></div>");
        layer.addClass("popup-layer");
        layer.html(`
            <div class="popup">
                <h2>${e.target.childNodes[0].data}</h2>
                <p>여기에 내용이 들어갑니다.</p>
                <button class="close">닫기</button>
            </div>`);
        $("body").append(layer);
        
        layer.find(".close").click(function() {
            $(layer).remove();
        })
    })
})