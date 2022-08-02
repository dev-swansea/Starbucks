var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>가 첫 번째 요소로 들어간 것이다. player로 지어놓으면 여기서 알아서 찾는다.
  new YT.Player("player", {
    // videoId는 매우 중요
    videoId: "ctxmx4_Y-nw", //최초 재생할 유튜브 영상 ID
    // var는 변수의 약어
    playerVars: {
      autoplay: true, //자동재생
      loop: true, //반복 재생 여부
      // 반복재생 할 영성의 리스트, 하나만 주구장창 틀어도 상관없음
      playlist: "ctxmx4_Y-nw",
    },
    events: {
      // 영상 준비가 되면 이벤트로 동영상을 넘겨주게 되고 이것을 실행할 로직을 만들어 주는 것이다.??
      onReady: (e) => {
        // target은 재생되는 영상을 의미한다.
        e.target.mute(); // 음소거
      },
    },
  });
}

// 될거면 되고 ㅅ발 안될거면 하지말고
