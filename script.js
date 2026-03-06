// Prüft, ob ein Element in der Bildschirmmitte sichtbar ist
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Element gilt als sichtbar, wenn seine Mitte im oberen Drittel des Bildschirms liegt
    const elementMiddle = rect.top + rect.height / 2;
    return elementMiddle > windowHeight * 0.2 && elementMiddle < windowHeight * 0.8;
}

// Aktualisiert Balken und sichtbare Sections
function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height; // Wert zwischen 0 und 1

    // Fortschrittsbalken skalieren
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.transform = 'scaleY(' + scrolled + ')';

    // Hervorhebung der sichtbaren Sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Event-Listener und initialer Aufruf
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();
