var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "ctxmx4_Y-nw",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: "ctxmx4_Y-nw",
    },
    events: {
      onReady: (e) => {
        e.target.mute();
      },
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
