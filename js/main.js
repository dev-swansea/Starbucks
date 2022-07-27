const searchEl = document.querySelector(".search");
// document대신 searchEl를 넣어준다. => document도 하나의 요소로 볼 수 있다. 쉽게 html로 보자
const searchInputEl = searchEl.querySelector("input");

// icon을 클릭하는게 아니네 ??
searchEl.addEventListener("click", () => {
  // focus를 강제 적용해주는 명령 => 클릭해서 .search input을 클릭하면 포커스 해라
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  // input 요소에 focus가 되면 .search에 focused라는 className을 추가하겠다, 이후 css에서 focused를 만들어 작업해준다.
  searchEl.classList.add("focused");
  // html속성을 attribute라고 부르는데, input에다 html속성을 지정할 때 사용한다.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// blur를 줘보자 => focus가 해제되면,
searchInputEl.addEventListener("blur", () => {
  // input 요소에 focus가 되면 .search에 focused라는 className을 추가하겠다, 이후 css에서 focused를 만들어 작업해준다.
  searchEl.classList.remove("focused");
  // html속성을 attribute라고 부르는데, input에다 html속성을 지정할 때 사용한다.
  searchInputEl.setAttribute("placeholder", "");
});
