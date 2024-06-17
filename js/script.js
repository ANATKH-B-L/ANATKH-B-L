 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/embed/D2gIt7WSY5Q";

      var firstScriptTag = document.getElementsByTagName('script')[0];

      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



      // 3. This function creates an <iframe> (and YouTube player)

      //    after the API code downloads.

      var player;

      function onYouTubeIframeAPIReady() {

        player = new YT.Player('player', {

          height: '0',

          width: '0',

          videoId: 'V8kUhkh-HEg',

          playerVars: { 'autoplay': 1, 'controls': 2, 'autohide':1, 'playlist': 'V8kUhkh-HEg', 'loop': 1}, 

          events: {

            'onReady': onPlayerReady,

            'onStateChange': onPlayerStateChange

          }

        });

      }



      // 4. The API will call this function when the video player is ready.

      function onPlayerReady(event) {

        event.target.setVolume(30);

        event.target.playVideo();

      }



      // 5. The API calls this function when the player's state changes.

      //    The function indicates that when playing a video (state=1),

      //    the player should play for six seconds and then stop.

      var done = false;

      function onPlayerStateChange(event) {

        if (event.data == YT.PlayerState.PLAYING && !done) {

          done = true;

        }

      }

      function stopVideo() {

        player.stopVideo();

      }
