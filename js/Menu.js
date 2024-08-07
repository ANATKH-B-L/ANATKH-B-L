document.addEventListener("DOMContentLoaded", function() {
	const menuButton = document.getElementById('menuButton');		//메뉴 버튼
	const menu = document.getElementById('menu');					//메뉴 블록
	const menuItems = menu.querySelectorAll('ul li');				//메뉴 리스트
	let menuVisible = false;
	const links = document.querySelectorAll('.menu a');				//메뉴 글자
	const subpages = document.querySelectorAll('.subpage');			//바뀌는 페이지 부분 블록
	
	const dorm7 = document.querySelectorAll('.dorm7');
    let delay = 0;

	menuButton.addEventListener('click', function () {
		const menuWidth = menu.offsetWidth;
		if (!menuVisible) {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.style.left = '0';
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100); // Adjust the delay as needed
                });
            }, 100);
        } else {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-100%)';
                }, index * 30); // Adjust the delay as needed
            });
            setTimeout(() => {
                menu.style.left = menuWidth === 300 ? '-300px' : '-100%';
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
            }, menuItems.length * 50);
        }
        menuVisible = !menuVisible;
    });

    // 바깥 클릭 시 메뉴 닫기
    document.addEventListener('click', function(event) {
        if (menuVisible && !menu.contains(event.target) && !menuButton.contains(event.target)) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-100%)';
                }, index * 30); // Adjust the delay as needed
            });
            setTimeout(() => {
                menu.style.left = menu.offsetWidth === 300 ? '-300px' : '-100%';
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
            }, menuItems.length * 50);
            menuVisible = false;
        }
    });

    // 페이지 전환 링크 클릭 이벤트 핸들러
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            subpages.forEach(subpage => {
                subpage.style.display = 'none';
                if (subpage.id === targetId) {
                    subpage.style.display = 'block';
				if(subpage.id === "memberPage")
				{
					dorm7.forEach((dorm7, dorm7Index) => {
					const elements = Array.from(dorm7.children);
					const elementsToAnimate = (dorm7Index%2 === 1) ? elements.reverse() : elements;
			
					elementsToAnimate.forEach((element) => {
						element.style.opacity = '0';
						setTimeout(() => {
							element.style.opacity = '1';
							element.style.transform = 'translateY(0)';
						}, delay);
						delay += 500;
						});
					});
				}
					
                }
            });
            menu.style.display = 'none';
            menuVisible = false;  // 메뉴를 숨기고 상태 업데이트
        });
    });
});
