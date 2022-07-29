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
// 두 번째 매개변수는 반복되는 횟수를 index라는 이름으로 사용이 가능했다고요?
fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 작업시간(초 단위), 옵션{객체데이터}), delay는 순차적으로 보여주기 위해 사용하는 메소드
  // delay:0.7은 0.7초 이후 보여지게 하는 것인데 둘 다 묶여있으므로 순차적 효과가 나타나지 않는다 그래서 (index + 1) *를 해준다.
  gsap.to(fadeEl, 1, { opacity: 1, delay: (index + 1) * 0.7 }); //0.7, 1.4, 2.1, 2.7, 이렇게 하니까 굳이 작업시간을 명시해줄 필요가 없는데?
});

// notice slide
// js 생성자(클래스) 함수에 선택자를 인수로 삽입해준다, 두 번째 인수로 옵션{object}을 넣어준다.
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  // 자동
  autoplay: true,
  // 반복
  loop: true,
});

// Promotion slide
new Swiper(".promotion .swiper-container", {
  // direction:horizontal default값으로 따로 명시할 필요가 없다(수직 이동)
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이게 하기
  loop: true,
  // autoplay: {
  //   delay: 5000, //5초에 한 번씩 자동으로 슬라이드, 기본값은 3초
  // },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 요소 번호 매기기
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
  // !로 반대의 값을 할당한다. true로만 하면 안되지, 또 다시 눌렀을 때도 계속 true가 되니까
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});
