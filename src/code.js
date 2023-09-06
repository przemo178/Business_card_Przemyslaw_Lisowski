const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

window.addEventListener('scroll', revealFromLeft);
window.addEventListener('scroll', revealFromRight);
window.addEventListener('scroll', revealFromDown);

function revealFromLeft() {
    const revealsLeft = document.querySelectorAll('.revealFromLeft');

    for (let i = 0; i < revealsLeft.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealsLeft[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            revealsLeft[i].classList.add('showFromLeft');
        }
        else {
            revealsLeft[i].classList.remove('showFromLeft');
        }
    }
}

function revealFromRight() {
    const revealsRight = document.querySelectorAll('.revealFromRight');

    for (let i = 0; i < revealsRight.length; i++) {

        let windowHeight2 = window.innerHeight;
        let revealTop2 = revealsRight[i].getBoundingClientRect().top;
        let revealPoint2 = 100;

        if (revealTop2 < windowHeight2 - revealPoint2) {
            revealsRight[i].classList.add('showFromRight');
        }
        else {
            revealsRight[i].classList.remove('showFromRight');
        }
    }
}

function revealFromDown() {
    const revealsDown = document.querySelectorAll('.revealFromDown');

    for (let i = 0; i < revealsDown.length; i++) {

        let windowHeight3 = window.innerHeight;
        let revealTop3 = revealsDown[i].getBoundingClientRect().top;
        let revealPoint3 = 100;

        if (revealTop3 < windowHeight3 - revealPoint3) {
            revealsDown[i].classList.add('showFromDown');
        }
        else {
            revealsDown[i].classList.remove('showFromDown');
        }
    }
}