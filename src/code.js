const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

window.addEventListener('scroll', revealFromLeft);
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

function revealFromDown() {
    const revealsDown = document.querySelectorAll('.revealFromDown');

    for (let i = 0; i < revealsDown.length; i++) {

        let windowHeight2 = window.innerHeight;
        let revealTop2 = revealsDown[i].getBoundingClientRect().top;
        let revealPoint2 = 100;

        if (revealTop2 < windowHeight2 - revealPoint2) {
            revealsDown[i].classList.add('showFromDown');
        }
        else {
            revealsDown[i].classList.remove('showFromDown');
        }
    }
}