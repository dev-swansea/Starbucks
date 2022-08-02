const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
    } else {
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
    }
  }, 300)
);

// animation
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, { opacity: 1, delay: (index + 1) * 0.7 });
});

// notice slide
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// Promotion slide
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// 이미지 플로팅 animation, 이 함수는 호출될때 인수로 어떤 요소를 선택할 것인지 선택자 라는 개념을 받을 것이다.
const floatingObj = (selector, delay, size) => {
  // gsap.to(요소, 시간, 옵션),
  // random에서 반환된 값이 지속시간으로 사용될것, 시간 범위 1.5 ~ 2.5초
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //동작 시간
    {
      // 옵션
      y: size,
      // -1은 무한반복, 이건 이 라이브러리에서 지원하는 기능이다.
      repeat: -1,
      // 한 번 재생된 애니메이션을 뒤로 재생시키는것
      yoyo: true,
      // 같은 값이여도 ease함수(타이밍 함수)를 통해 움직임을 제어할 수 있다.
      ease: Power1.easeInOuteaseInOut,
      delay: random(0, delay),
    }
  );
};
// css선택자를 인수로 넣어준다, 여기서 1,15가 뭔지 헷갈릴 수 있으니 매개변수 부분에 이름으로 명시해준다.
floatingObj(".floating1", 1, 15);
floatingObj(".floating2", 0.5, 15);
floatingObj(".floating3", 1.5, 20);
