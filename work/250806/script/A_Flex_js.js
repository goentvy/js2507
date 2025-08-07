// menubar Event

// slideUp 함수: 요소를 위로 슬라이드하여 숨깁니다.
const slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

// slideDown 함수: 요소를 아래로 슬라이드하여 보여줍니다.
const slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
    }, duration);
};

// 메뉴 항목에 이벤트 리스너 추가
document.querySelectorAll("#main-menu > li").forEach(function(li) {
    const subMenu = li.querySelector(".sub_menu");
    if (subMenu) {
        li.addEventListener("mouseenter", function() {
            slideDown(subMenu, 500);
        });

        li.addEventListener("mouseleave", function() {
            slideUp(subMenu, 500);
        });
    }
});

//  image Slide Event
document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.getElementById("slideImage");
    if (!slideContainer) return;

    const slides = slideContainer.querySelectorAll("img");
    let current = 0;
    const total = slides.length;
    const height = 300;
    const duration = 800;
    const delay = 2500;

    slides.forEach(slide => {
        slide.style.position = 'absolute'; // Ensure position is set for 'top' to work
        slide.style.top = height + "px";
        slide.style.transition = `top ${duration}ms ease-in-out`;
    });

    if (slides.length > 0) {
        slides.style.top = "0px";
        slides.classList.add("active");
    }

    function autoSlide() {
        if (slides.length === 0) return;

        const currentSlide = slides;
        currentSlide.style.top = -height + "px"; // Animate current slide up
        currentSlide.classList.remove("active");

        current = (current + 1) % total;
        const nextSlide = slides;

        nextSlide.style.top = height + "px"; // Position next slide below
        // Force reflow to ensure the 'top' change is applied before transition
        void nextSlide.offsetWidth;
        nextSlide.style.top = "0px"; // Animate next slide into view
        nextSlide.classList.add("active");
    }

    const timer = setInterval(autoSlide, delay);
});

// notice & gallery Event
document.addEventListener("DOMContentLoaded", function() {
    const noticeBtn = document.getElementById("noticeBox");
    const galleryBtn = document.getElementById("galleryBox");
    const noticeCt = document.getElementById("noticeContent");
    const galleryCt = document.getElementById("galleryContent");

    if (!noticeBtn || !galleryBtn || !noticeCt || !galleryCt) return;

    // Custom toggle function for display
    const toggleDisplay = (element, show) => {
        element.style.display = show ? (element.dataset.originalDisplay || 'block') : 'none';
    };

    // Store original display if not already stored
    if (!noticeCt.dataset.originalDisplay) {
        noticeCt.dataset.originalDisplay = window.getComputedStyle(noticeCt).display;
    }
    if (!galleryCt.dataset.originalDisplay) {
        galleryCt.dataset.originalDisplay = window.getComputedStyle(galleryCt).display;
    }

    const handleClick = function() {
        galleryCt.style.display = "flex"; // Ensure gallery content is flex initially

        const isNotice = (this === noticeBtn);

        toggleDisplay(noticeCt, isNotice);
        toggleDisplay(galleryCt, !isNotice);

        noticeBtn.classList.toggle("active", isNotice);
        galleryBtn.classList.toggle("active", !isNotice);
    };

    noticeBtn.addEventListener("click", handleClick);
    galleryBtn.addEventListener("click", handleClick);
});

// popup Event
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".open-popup").forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            console.log(); // Keep original console.log if intended

            let layer = document.createElement("div");
            layer.classList.add("popup-layer");

            // Extract heading text safely, handling potential undefined childNodes
            const headingText = e.target.childNodes.length > 0 && e.target.childNodes.nodeType === Node.TEXT_NODE
                ? e.target.childNodes.data
                : '팝업 제목'; // Fallback text

            layer.innerHTML = `
                <div class="popup">
                    <h2>${headingText}</h2>
                    <p>여기에 내용이 들어갑니다.</p>
                    <button class="close">닫기</button>
                </div>`;
            document.body.appendChild(layer);

            const closeButton = layer.querySelector(".close");
            if (closeButton) {
                closeButton.addEventListener("click", function() {
                    layer.remove();
                });
            }
        });
    });
});