var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '405',
        width: '720',
        videoId: 'bd5tpq_3kTs',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 1,
            'enablejsapi': 1,
            'loop': 1,
            'autohide': 1,
            'playsinline': 1,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    if (player.getPlayerState() != 1) {
        event.target.mute();
        event.target.playVideo();
    }
}