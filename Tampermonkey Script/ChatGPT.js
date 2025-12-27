// ==UserScript==
// @name         ChatGPT Annoyance Removal + Auto Usage
// @namespace    Browser Scripts
// @version      1.0
// @description  Remove modals, re-enable scrolling, and automate ChatGPT usage
// @author       You
// @match        https://*.chatgpt.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    // ========== ANNOYANCE REMOVAL ==========
    
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

    // ========== AUTO USAGE ==========
    
    function Chat(message) {
        let chatBox = document.getElementById("prompt-textarea");
        chatBox.textContent = message;
        chatBox.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    }

    function AutoReload() {
        setInterval(() => {
            console.log("10 minutes elapsed - reloading page...");
            window.location.href = "https://chatgpt.com";
        }, 600000); // 10 minutes
    }
    
    function Start() {
        let count = 0;
        let intervalId = setInterval(() => {
            if (count < 5) {
                Chat("write 100,000 words novel about time travel. you can build this iteratively");
                console.log(`Execution Count: ${count}`); 
                count++;
            } else {
                Chat("just Help me finish the 100,000 words novel");
                console.log(`Execution Count: ${count}`); 
                count++;
            }
        }, 10000);
    }

    AutoReload();
    Start();
})();