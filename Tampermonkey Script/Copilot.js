// ==UserScript==
// @name         Copilot Usage
// @namespace    Browser Scripts
// @version      2.1
// @description  Copilot Usage
// @author       You
// @match        https://copilot.microsoft.com/*
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(async function () {
    "use strict";

    function Chat(message) {
        let chatBox = document.querySelector('textarea#userInput');
        // Set the value with native value setter (to bypass detection)
        const valueSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
        valueSetter.call(chatBox, message);
        // Notify the page that input was entered (trigger showing submit button)
        chatBox.dispatchEvent(new InputEvent('input', { bubbles: true }));
        // Click the submit button
        let submitButton = document.querySelector('[aria-label="Submit message"]');
        if (submitButton) {
            setTimeout(() => { submitButton.click(); }, 500);
        } else {
            console.log("Submit button not found");
        }
    }

    function AutoReload() {
        setInterval(() => {
            console.log("5 minutes elapsed - reloading page...");
            GM_openInTab('https://copilot.microsoft.com', { active: true });
            setTimeout(() => { window.close(); }, 500);
        }, 300000); // 5 minutes
    }

    function Start() {
        let count = 0;
        let intervalId = setInterval(() => {
            if (count < 5) {
                Chat("write 100,000 words novel about time travel. you can build this iteratively. dont ask me question, just do it.");
                console.log(`Execution Count: ${count}`); count++;
            } else {
                Chat("just Help me continue to finish the 100,000 words novel");
                console.log(`Execution Count: ${count}`); count++;
            }
        }, 10000); // 10 seconds between messages
    }

    AutoReload();
    Start();
})();
