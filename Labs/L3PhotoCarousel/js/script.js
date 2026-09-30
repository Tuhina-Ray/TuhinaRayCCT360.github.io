
// let currentSlide = 0;
// const totalSlides = 3;
// let track = document.getElementById('trackOne')

let slideIndexes = {"trackOne": 0, "trackTwo": 0}
const totalSlides = 3;


function prev(trackId){
    if (slideIndexes[trackId] > 0) {
        slideIndexes[trackId]--;
        updatePosition(trackId);
    }
}

function next(trackId){
    if (slideIndexes[trackId] < totalSlides - 1) {
        slideIndexes[trackId]++;
        updatePosition(trackId);
    }
}
function updatePosition(trackId) {

    let track = document.getElementById(trackId);
    let currentIndex = slideIndexes[trackId];

    track.style.left = -(currentIndex *100) + "%";
    console.log(trackId + "is on: " + currentIndex);

}

