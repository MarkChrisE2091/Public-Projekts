// ==UserScript==
// @name         Gemini Usage
// @namespace    Browser Scripts
// @version      2.6
// @description  Gemini Usage
// @author       You
// @match        https://gemini.google.com/*
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function () {
    "use strict";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function Chat(message) {
        let chatBox = document.querySelector('[class^="ql-editor"]');
        chatBox.textContent = message;
        // Click the submit button
        let submitButton = document.querySelector('[aria-label="Send message"]');
        if (submitButton) {
            await sleep(500);
            submitButton.click();
        } else {
            console.log("Submit button not found");
        }
    }

    async function AutoReload() {
        await sleep(300000); // 5 minutes
        console.log("5 minutes elapsed - reloading page...");
        window.location.replace('https://gemini.google.com/app');
    }

    // Messages
    const INITIAL_MESSAGE = "write 100,000 words novel about time travel. you can build this iteratively. dont ask me question, just do it.";
    const FOLLOWUP_MESSAGE = "just Help me continue to finish the 100,000 words novel";

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
