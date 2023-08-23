function showPackagesPopup() {
    if (window.innerWidth > 600) {
        var popup = document.querySelector('.packages-popup');
        popup.classList.add('visible');
        document.body.classList.add('popup-active');
    }
}


function closePackagesPopup() {
    var popup = document.querySelector('.packages-popup');
    popup.classList.remove('visible');
    document.body.classList.remove('popup-active');
}


document.addEventListener('DOMContentLoaded', function() {
    //console.log("DOMContentLoaded event triggered!");  // This will log when the DOM is loaded
    // Add click events to each packages-card to show the popup
    var cards = document.querySelectorAll('.packages-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function(event) {
            // Stop the event from propagating to the document level
            event.stopPropagation();
            
            // Toggle the popup
            var popup = document.querySelector('.packages-popup');
                if (popup.classList.contains('visible')) {
                    closePackagesPopup();
                } else {
                    showPackagesPopup();
                }

        });
    });
    
});

document.addEventListener('click', function(event) {
    var popup = document.querySelector('.packages-popup');
    
    // Check if the popup is visible
    if (popup.classList.contains('visible')) {
        
        // If the click target is not inside the popup, close the popup
        if (!popup.contains(event.target)) {
            closePackagesPopup();
        }
    }
});




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