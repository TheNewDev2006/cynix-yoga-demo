// URL Parameters handler for template customization
(function() {
    'use strict';
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Handle gym name parameter
    const gymName = urlParams.get('gym-name');
    if (gymName) {
        const gymNameElements = document.querySelectorAll('[data-gym-name]');
        gymNameElements.forEach(function(el) {
            el.textContent = gymName;
        });
    }
    
    // Handle gym address parameter
    const gymAddress = urlParams.get('gym-address');
    if (gymAddress) {
        const gymAddressElements = document.querySelectorAll('[data-gym-address]');
        gymAddressElements.forEach(function(el) {
            el.textContent = gymAddress;
        });
    }
    
    // Handle gym phone parameter
    const gymPhone = urlParams.get('gym-phone');
    if (gymPhone) {
        const gymPhoneElements = document.querySelectorAll('[data-gym-phone]');
        gymPhoneElements.forEach(function(el) {
            el.textContent = gymPhone;
        });
    }
    
    // Handle color scheme parameter
    const colorScheme = urlParams.get('color');
    if (colorScheme) {
        const colorLink = document.getElementById('colors');
        if (colorLink) {
            colorLink.href = 'css/colors/scheme-' + colorScheme + '.css';
        }
    }
    
    // Handle dark mode parameter
    const darkMode = urlParams.get('dark');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        const bootstrapLink = document.getElementById('bootstrap');
        if (bootstrapLink) {
            bootstrapLink.href = 'css/bootstrap-dark.min.css';
        }
    }
})();
