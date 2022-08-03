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
const toTopEl = document.getElementById("to-top");
// gsap은 위에서처럼 직접 찾아줘서 첫 번째 요소로 넣어줘도 되지만 css 선택자만 적어놔도 알아서 찾는다.
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
      // 위로가기 버튼 보이게 하기,
      gsap.to(toTopEl, 0.2, { x: 0 });
    } else {
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
      // 위로가기 버튼 사라지게 하기, 오른쪽으로 100px 옮겨버린다, window라서 가능한 거구나
      gsap.to(toTopEl, 0.2, { x: 100 });
    }
  }, 300)
);

// 누르면 올라가게
toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    // 스크롤 위치를 0으로 이동시켜 준다, scrollTo 이걸 위해 cdn으로 가져온 것
    scrollTo: 0,
  });
});

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

// AWARDS
new Swiper(".awards .swiper-container", {
  // direction: "horizontal", 수평, 이건 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
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

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingObj = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOuteaseInOut,
    delay: random(0, delay),
  });
};
floatingObj(".floating1", 1, 15);
floatingObj(".floating2", 0.5, 15);
floatingObj(".floating3", 1.5, 20);

// SCROLLMAGIC                            섹션태그의 .scroll-spy 클래스
const spyEls = document.querySelectorAll("section.scroll-spy");
// 특정한 섹션이 화면에 보이면 애니메이션을 추가해 줄 수 있다고 ?
spyEls.forEach((spyEl) => {
  // 특정한 요소를 감시하는 옵션을 지정하는 메소드, setClassToggle은 class를 toggle로 지정한다, addTo는 scrollMagic의 컨트롤러로 꼭 필요한 메서드라고 문서에 작성되어 있다 한다.
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    //viewport가 0~ 1 까지라고 하면 0.8에 trigger가 걸어 그곳에 어떠한 섹션이 걸리면 trigger가 된다. =>.setClassToggle()이 실행된다.
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show") //두개의 인수가 들어갈 수 있다.
    .addTo(new ScrollMagic.Controller()); //실제로 동작할 수 있게 만들어준다.
});

// 년도 계산
const thisyear = document.querySelector(".this-year");
// 값을 지정 Date는 JS의 생성자 함수라고 한다. 날짜 정보를 가진 date 객체를 뽑아낼 수 있다고?
thisyear.textContent = new Date().getFullYear(); //2022
