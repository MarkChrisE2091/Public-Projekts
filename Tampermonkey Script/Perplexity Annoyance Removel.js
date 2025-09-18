// ==UserScript==
// @name         Perplexity Annoyance Removel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Perplexity Remove Modal and Re-enable Scrolling
// @author       You
// @match        https://*.perplexity.ai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Re-enable scrolling
    document.body.removeAttribute('data-scroll-locked');
    document.body.style.pointerEvents = 'auto';
    document.body.style.overflowY = 'scroll';
    window.addEventListener('wheel', function(e) {
        e.stopImmediatePropagation();
    }, true);

})();