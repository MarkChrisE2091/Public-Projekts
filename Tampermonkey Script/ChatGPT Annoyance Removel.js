// ==UserScript==
// @name         ChatGPT Annoyance Removel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ChatGPT Remove Modal and Re-enable Scrolling
// @author       You
// @match        https://*.chatgpt.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    // Remove the modal
    document.querySelector('[data-testid="modal-no-auth-gpt5-upsell"]')?.remove();
    document.querySelector('[data-testid="modal-no-auth-rate-limit"]')?.remove();

    // Re-enable scrolling
    document.body.removeAttribute('data-scroll-locked');
    document.body.style.pointerEvents = 'auto';
    document.body.style.overflowY = 'scroll';
    window.addEventListener('wheel', function(e) {
        e.stopImmediatePropagation();
    }, true);

    // Prevent modal from reappearing
    const style = document.createElement('style');
    style.textContent = `
        [data-testid="modal-no-auth-rate-limit"], [data-testid="modal-no-auth-gpt5-upsell"] { display: none !important; }
        body, body[data-scroll-locked="1"] { pointer-events: auto !important; }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver(() => {
        if (document.body.style.pointerEvents === "none" || document.body.hasAttribute("data-scroll-locked")) {
            document.body.style.pointerEvents = "auto";
            document.body.removeAttribute("data-scroll-locked");
        }
    });
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["style", "data-scroll-locked"],
    });

})();
