function toggleMenu(displayState) {
    const nav = document.getElementById('header_navigation');
    const body = document.body;

    nav.style.display = displayState;
    if (displayState === 'block') {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

function navigateAndCloseMenu(linkElement) {
    // Close the side menu
    toggleMenu('none');

    // Navigate to the desired section after a slight delay
    setTimeout(() => {
        window.location.href = linkElement.href;
    }, 100);
}
