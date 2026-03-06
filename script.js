const container = document.querySelector('.container');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const percent = (scrollLeft / maxScroll) * 100;
    progressBar.style.width = percent + '%';
}

container.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
updateProgress();
