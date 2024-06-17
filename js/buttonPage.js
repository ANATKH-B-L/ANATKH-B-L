document.addEventListener("DOMContentLoaded", function() {
    const mainButton = document.getElementById('mainButton');         // 헤더 로고
    const noticeButton = document.getElementById('noticeButton');     // 헤더 공지
    const worldButton = document.getElementById('worldButton');       // 헤더 세계관
    const guideButton = document.getElementById('guideButton');       // 헤더 캐릭터 가이드
    const systemButton = document.getElementById('systemButton');     // 헤더 일반 시스템
    const battleButton = document.getElementById('battleButton');     // 헤더 배틀 시스템
    const memberButton = document.getElementById('memberButton');     // 헤더 멤버란

    const mainContent = document.getElementById('mainContent');       // 메인
    const noticePage = document.getElementById('noticePage');         // 공지
    const worldPage = document.getElementById('worldPage');           // 세계관
    const guidePage = document.getElementById('guidePage');           // 가이드
    const systemPage = document.getElementById('systemPage');         // 일반 시스템
    const battlePage = document.getElementById('battlePage');         // 배틀 시스템
    const memberPage = document.getElementById('memberPage');         // 멤버란

    var player;
    var isPlaying = false;

    function hideAllPages() {
        mainContent.style.display = 'none';
        noticePage.style.display = 'none';
        worldPage.style.display = 'none';
        guidePage.style.display = 'none';
        systemPage.style.display = 'none';
        battlePage.style.display = 'none';
        memberPage.style.display = 'none';
    }

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        document.getElementById('playButton').addEventListener('click', function() {
            if (isPlaying) {
                player.pauseVideo();
                this.textContent = '❚❚';
            } else {
                player.playVideo();
                this.textContent = '▶';
            }
            isPlaying = !isPlaying;
        });

        document.getElementById('volumeControl').addEventListener('input', function() {
            var volume = this.value;
            player.setVolume(volume);
        });
    }
	document.getElementById('simbol').addEventListener('click', function() {
		document.getElementById('screen3').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
        hideAllPages();
        mainContent.style.display = 'block';
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
			document.getElementById('volumeControl').addEventListener('input', function() {
            var volume = this.value;
            player.setVolume(volume);
			});
            isPlaying = true;
            document.getElementById('playButton').textContent = '▶';
		}
    });
    document.getElementById('nextButton').addEventListener('click', function() {
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'block';
        hideAllPages();
        mainContent.style.display = 'block';
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
			document.getElementById('volumeControl').addEventListener('input', function() {
            var volume = this.value;
            player.setVolume(volume);
        });
            isPlaying = true;
            document.getElementById('playButton').textContent = '▶';
        }
    });

    mainButton.addEventListener('click', function() {
        hideAllPages();
        mainContent.style.display = 'block';
    });

    noticeButton.addEventListener('click', function() {
        hideAllPages();
        noticePage.style.display = 'block';
    });

    worldButton.addEventListener('click', function() {
        hideAllPages();
        worldPage.style.display = 'block';
    });

    guideButton.addEventListener('click', function() {
        hideAllPages();
        guidePage.style.display = 'block';
    });

    systemButton.addEventListener('click', function() {
        hideAllPages();
        systemPage.style.display = 'block';
    });

    battleButton.addEventListener('click', function() {
        hideAllPages();
        battlePage.style.display = 'block';
    });

    memberButton.addEventListener('click', function() {
        hideAllPages();
        memberPage.style.display = 'block';
    });
	
	function checkPassword() {
        const passwordInput = document.getElementById('password').value;
        const correctPassword = 'Omne Sublime Videt';
        const errorMessage = document.getElementById('error-message');
        const protectedContent = document.getElementById('protected-content');
        const passwordContainer = document.getElementById('password-container');

        if (passwordInput === correctPassword) {
			isPlaying = false;
			console.log(isPlaying);
            passwordContainer.classList.remove('show');
            setTimeout(() => {
				protectedContent.style.display = 'block';
                document.getElementById('screen2').style.display = 'none';
                document.getElementById('screen3').style.display = 'flex';
                protectedContent.classList.add('show');
            }, 500);
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    }
	
	function handleKeyUp(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    }
    window.checkPassword = checkPassword;
    window.handleKeyUp = handleKeyUp;
	const passwordContainer = document.getElementById('password-container');
    passwordContainer.classList.add('show');

    // YouTube iframe API 스크립트 추가
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

document.addEventListener('DOMContentLoaded', (event) => {
	function scrollToTop() {
		document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
	}
	window.scrollToTop = scrollToTop;
});

document.querySelector('.rangeInput').addEventListener('input',function(event){
  	var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #00C9E9 0%, #00C9E9 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
  });