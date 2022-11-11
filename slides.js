
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.carousel_button--left');
const preview = document.querySelector('.carousel_button--right');
const dotnav = document.querySelector('.carousel_nav');
const dots = Array.from(dotnav.children);

const slidewidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slidewidth * index + 'px';
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentslide, targetslide) => {
    track.style.transform = 'translateX-('+ targetslide .style . left ;
    currentslide.classList.remove('current-slide');
    targetslide.classList.add('current-slide');
}

prevbutton.addEventListener('click', e => {
    const currentslide = track.querySelector('.current-slide');
    const prevslide = currentslide.nextElementSibling;

    moveToSlide(track, currentslide, prevslide)

});


nextbutton.addEventListener('click', e => {
    const currentslide = track.querySelector('.current-slide');
    const nextslide = currentslide.nextElementSibling;

    moveToSlide(track, currentslide, nextslide)

})
