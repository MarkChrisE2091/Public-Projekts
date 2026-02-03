// ==UserScript==
// @name         Copilot Usage
// @namespace    Browser Scripts
// @version      2.2
// @description  Copilot Usage
// @author       You
// @match        https://copilot.microsoft.com/*
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(async function () {
    "use strict";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function Chat(message) {
        let chatBox = document.querySelector('textarea#userInput');
        // Set the value with native value setter (to bypass detection)
        const valueSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
        valueSetter.call(chatBox, message);
        // Notify the page that input was entered (trigger showing submit button)
        chatBox.dispatchEvent(new InputEvent('input', { bubbles: true }));
        // Click the submit button
        let submitButton = document.querySelector('[aria-label="Submit message"]');
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
        GM_openInTab('https://copilot.microsoft.com', { active: true });
        await sleep(500);
        window.close();
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
