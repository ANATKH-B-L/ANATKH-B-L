document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');
	const schedule = document.querySelector('.schedule');
	const slides = document.querySelectorAll('.schedule li img');
	const totalSlides = slides.length;
	let slideWidth = 0;
    let scheduleIndex = 0;
	
	// 이전 버튼 클릭 시
	prevBtn.addEventListener('click', function() {
		scheduleIndex = (scheduleIndex === 0) ? totalSlides - 1 : scheduleIndex - 1;
		updateGallery();
	});
	
	// 다음 버튼 클릭 시
	nextBtn.addEventListener('click', function() {
		scheduleIndex = (scheduleIndex === totalSlides - 1) ? 0 : scheduleIndex + 1;
		updateGallery();
	});
	
	// 갤러리 업데이트
	function updateGallery() {
		slideWidth = slides[0].offsetWidth;
		slides.forEach((slide, s_index) => {
			if (s_index === scheduleIndex || s_index === (scheduleIndex + 1) % totalSlides || s_index === (scheduleIndex - 1 + totalSlides) % totalSlides) {
				slide.style.display = 'block';
			} else {
				slide.style.display = 'none';
			}
		});
		const offset = -scheduleIndex * slideWidth;
		schedule.style.transform = `translateX(${offset}px)`;
	}
	window.addEventListener('resize', () => {
		slideWidth = slides[0].clientWidth;
		schedule.style.transform = `translateX(-${scheduleIndex * slideWidth}px)`;
	});
});