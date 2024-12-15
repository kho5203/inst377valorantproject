const sr = ScrollReveal({
    viewFactor: 0.5
});

sr.reveal('.section-1', { origin: 'bottom', distance: '1000px', duration: 1000 });
sr.reveal('.section-2', { origin: 'bottom', distance: '1000px', duration: 1000 });
sr.reveal('.section-3', { origin: 'bottom', distance: '1000px', duration: 1000 });

function initializePage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(checkPageReload, 500);
}

function checkPageReload() {
    if (sessionStorage.getItem('pageReloaded')) {
        sessionStorage.removeItem('pageReloaded');
        location.reload();
    } else {
        sessionStorage.setItem('pageReloaded', 'true');
    }
}