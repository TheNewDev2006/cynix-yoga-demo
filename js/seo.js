(function() {
    'use strict';
    
    function getUrlParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }
    
    const gymName = getUrlParam('name') || 'Cynix Inc';
    const gymPhone = getUrlParam('phone') || '0725582444';
    const gymAddress = getUrlParam('address') || '237, Jampettah Street, Colombo 13';
    const gymOwner = getUrlParam('owner') || 'Manisha Gurukanda';
    
    function getHeroImage() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const heroImages = {
            'index.html': 'images/background/4.webp',
            'about.html': 'images/background/3.webp',
            'classes.html': 'images/background/2.webp',
            'class-single.html': 'images/background/2.webp',
            'schedule.html': 'images/background/2.webp',
            'pricing.html': 'images/background/2.webp',
            'contact.html': 'images/background/2.webp',
            'join.html': 'images/background/5.webp',
            'blog.html': 'images/background/5.webp',
            'blog-single.html': 'images/background/5.webp'
        };
        return heroImages[page] || 'images/background/4.webp';
    }
    
    function getPageTitle() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        const pageNames = {
            'index.html': '',
            'about.html': 'About Us',
            'classes.html': 'Our Classes',
            'class-single.html': 'Class Details',
            'schedule.html': 'Class Schedule',
            'pricing.html': 'Pricing Plans',
            'contact.html': 'Contact Us',
            'join.html': 'Join Now',
            'team.html': 'Our Team',
            'blog.html': 'Latest News',
            'blog-single.html': 'Blog Post'
        };
        const pageName = pageNames[page] || '';
        return pageName ? `${gymName} - ${pageName}` : gymName;
    }
    
    function updateSEO() {
        const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
        const heroImage = getHeroImage();
        const absoluteImageUrl = baseUrl + heroImage;
        const pageTitle = getPageTitle();
        const description = `${gymName} - Your premier fitness destination in Sri Lanka. Expert trainers, modern equipment, and personalized programs to help you achieve your fitness goals. Located in ${gymAddress}.`;
        
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', pageTitle);
        }
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', description);
        }
        
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            ogImage.setAttribute('content', absoluteImageUrl);
        }
        
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', window.location.href);
        }
        
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (twitterCard) {
            twitterCard.setAttribute('content', 'summary_large_image');
        }
        
        document.title = pageTitle;
        
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }
    }
    
    const gymNameEls = document.querySelectorAll('.gym-name, [data-gym-name]');
    gymNameEls.forEach(function(el) {
        el.textContent = gymName;
    });
    
    const gymPhoneEls = document.querySelectorAll('.gym-phone, [data-gym-phone]');
    gymPhoneEls.forEach(function(el) {
        el.textContent = gymPhone;
    });
    
    const gymAddressEls = document.querySelectorAll('.gym-address, [data-gym-address]');
    gymAddressEls.forEach(function(el) {
        el.textContent = gymAddress;
    });
    
    const gymOwnerEls = document.querySelectorAll('.gym-owner, [data-gym-owner]');
    gymOwnerEls.forEach(function(el) {
        el.textContent = gymOwner;
    });
    
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function(link) {
        link.href = 'tel:' + gymPhone.replace(/\s/g, '');
    });
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateSEO);
    } else {
        updateSEO();
    }
})();
