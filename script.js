const slideViewer = document.querySelector("#slideviewer");
const currentSlide = document.querySelector("#currentslide");

let slideIndex = 0;

function nextSlide(slideFolder, slides) {
    slideIndex = (slideIndex + 1) % slides.length;
    console.log(slideIndex);
    currentSlide.src = slideFolder + slides[slideIndex]
}

window.addEventListener("click", (e)=>{
    nextSlide(slideFolder, slides)
})