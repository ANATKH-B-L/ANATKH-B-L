const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const scheduleTrack = document.querySelector('.schedule-track');
const slides = document.querySelectorAll('.schedule-slide');
const totalSlides = slides.length;
let slideWidth = slides[0].offsetWidth;
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
    slideWidth = slides[0].offsetWidth; // 슬라이드 너비 재계산
    const offset = -scheduleIndex * slideWidth;
    scheduleTrack.style.transform = `translateX(${offset}px)`;
}

// 창 크기 조정 시 슬라이드 너비 업데이트
window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    updateGallery();
});

// 초기 갤러리 업데이트
updateGallery();
