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
    const targetID = linkElement.getAttribute('href').substr(1);
    const targetElement = document.getElementById(targetID);

    if (window.innerWidth <= 600) {
        // Close the side menu only for smaller screens
        toggleMenu('none');
        
        // Navigate to the desired section after a slight delay for smaller screens
        setTimeout(() => {
            window.location.href = linkElement.href;
        }, 100);
    } else {
        // Smoothly scroll to the target element for screens larger than 600px
        targetElement.scrollIntoView();
    }
}

