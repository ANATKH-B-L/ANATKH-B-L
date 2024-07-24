document.addEventListener("DOMContentLoaded", function() {
	const Button1st = document.getElementById('btn1st');
	const Button4th = document.getElementById('btn4th');
	const Button7th = document.getElementById('btn7th');
	const ButtonA = document.getElementById('btnA');
	
	const page1st = document.getElementById('1st');
	const page4th = document.getElementById('4th');
	const page7th = document.getElementById('7th');
	const pageA = document.getElementById('adult');
	
	const dorm1 = document.querySelectorAll('.dorm1');
	const dorm4 = document.querySelectorAll('.dorm4');
    let delay = 0;
	
	function hideAllPages() {
		page1st.style.display = 'none';
		page4th.style.display = 'none';
		page7th.style.display = 'none';
		pageA.style.display = 'none';
    }
	function portrait1() {
		dorm1.forEach((dorm1, dorm1Index) => {
            const elements = Array.from(dorm1.children);
            const elementsToAnimate = (dorm1Index%2 === 1) ? elements.reverse() : elements;

            elementsToAnimate.forEach((element) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
                delay += 500;
            });
        });
	}
	function portrait4() {
		dorm4.forEach((dorm4, dorm4Index) => {
            const elements = Array.from(dorm4.children);
            const elementsToAnimate = (dorm4Index%2 === 1) ? elements.reverse() : elements;

            elementsToAnimate.forEach((element) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
                delay += 500;
            });
        });
	}
	Button1st.addEventListener('click', function(){
		hideAllPages();
		page1st.style.display = 'block';
		portrait1();
		delay = 0;
	});
	Button4th.addEventListener('click', function(){
		hideAllPages();
		page4th.style.display = 'block';
		portrait4();
		delay = 0;
	});
	Button7th.addEventListener('click', function(){
		hideAllPages();
		page7th.style.display = 'block';
		delay = 0;
	});
	ButtonA.addEventListener('click', function(){
		hideAllPages();
		pageA.style.display = 'block';
		delay = 0;
	});
});

