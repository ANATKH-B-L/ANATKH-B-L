function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 플레이어가 준비되었을 때
function onPlayerReady(event) {
    event.target.setVolume(50); // 볼륨 설정 (0에서 100 사이 값)
    event.target.playVideo(); // 비디오 재생
}

// YouTube iframe API 스크립트 추가
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const volumeControl = document.getElementById("volumeControl");

    playButton.addEventListener("mouseover", function() {
        volumeControl.style.opacity = "1";
        volumeControl.style.visibility = "visible";
        volumeControl.style.left = "50px";
    });

    playButton.addEventListener("mouseout", function() {
        volumeControl.style.opacity = "0";
        volumeControl.style.visibility = "hidden";
        volumeControl.style.left = "-100px";
    });
});
