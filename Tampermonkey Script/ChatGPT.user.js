// ==UserScript==
// @name         ChatGPT Usage
// @namespace    Browser Scripts
// @version      0.5
// @description  Remove modals and annoyance, re-enable scrolling, and automate ChatGPT usage
// @author       You
// @match        https://*.chatgpt.com/*
// @grant        GM_openInTab
// @grant        window.close
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

    window.addEventListener('wheel', function (e) {
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
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function Chat(message) {
        let chatBox = document.getElementById("prompt-textarea");
        chatBox.textContent = message;
        chatBox.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    }

    async function AutoReload() {
        await sleep(300000); // 5 minutes
        console.log("5 minutes elapsed - reloading page...");
        GM_openInTab('https://chatgpt.com', { active: true });
        await sleep(500);
        window.close();
    }
    
    // Messages
    const INITIAL_MESSAGE = "write 100,000 words novel about time travel. you can build this iteratively. dont ask me question, just do it. (write 3000 more words now)";
    const FOLLOWUP_MESSAGE = "just Help me start/continue to finish the 100,000 words time travel novel (write 3000 more words now)";

    function Start() {
        let count = 0;
        setInterval(() => {
            const message = (count < 5) ? INITIAL_MESSAGE : FOLLOWUP_MESSAGE;
            Chat(message);
            console.log(`Execution Count: ${count}`); count++;
        }, 10000); // 10 seconds between messages
    }

    AutoReload();
    Start();
})();
