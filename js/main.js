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

// 클래스 선탁자는 웬만하면 부모 요소까지 적는구나 ?
const bedgeEl = document.querySelector("header .bedges");
// 윈도우는 브라우저창(보고있는 화면 자체?) 이라고 보면 된다. 윈도우 객체는 브라우저가 가지고 있는 명령들을 가지고 있다.
// scroll할때마다 이벤트가 발생한다.=>페이지가 무거워질 수 있다. 화면 버벅임이 생길 수 있기 때문에 라이브러리를 이용해 scroll함수를 제어할 것이다. throttle은 cdn으로 연결한 라이브러리 메소드를 사용하는 것이다., 이건 제어 시간을 줘서 한 번씩만 실행되도록 하는 것이다.
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 벳지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(bedgeEl, 0.6, { opacity: 0, display: "none" });
    } else {
      // 벳지 보이기
      gsap.to(bedgeEl, 0.6, { opacity: 1, display: "block" });
    }
  }, 300)
);
//_.throttle(함수, 시간)
