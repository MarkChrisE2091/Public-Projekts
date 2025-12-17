// ==UserScript==
// @name         Alt+Click Image Download
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Alt+Click any image to download to browser's default location (handles CORS)
// @match        *://*/*
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
    
    document.addEventListener('click', function(e) {
        // Check if Alt key is pressed and target is an image
        if (e.altKey && e.target.tagName) {
            // Prevent default behaviour - going to the image
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            let imgElement = null;
            
            // Get the image
            if (e.target.tagName === 'IMG') {
                imgElement = e.target;
            } else {
                imgElement = e.target.querySelector('img');
            }
            
            // Download the image
            if (imgElement && imgElement.src) {
                console.log('Downloading:', imgElement.src);
                downloadImage(imgElement.src, getImageName(imgElement.src));
            }

            return false; // Prevent going to the image
        }
    }, true); // 'true' enables capture phase to catch clicks early
    
    function downloadImage(url, filename) {
        // Try GM_download first (bypasses CORS)
        if (typeof GM_download !== 'undefined') {
            GM_download(url, filename);
        } else {
            // Fallback to default download: force download by opening in new window with download attribute
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    
    function getImageName(url) {
        // Extract filename from URL, or use default
        const name = url.split('/').pop().split('?')[0];
        return name || 'image.jpg';
    }
})();