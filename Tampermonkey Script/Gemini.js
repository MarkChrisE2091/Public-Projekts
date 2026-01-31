// ==UserScript==
// @name         Gemini Usage
// @namespace    Browser Scripts
// @version      2.1
// @description  Gemini Usage
// @author       You
// @match        https://gemini.google.com/*
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function () {
    "use strict";

    function Chat(message) {
        let chatBox = document.querySelector('[class^="ql-editor"]');
        chatBox.textContent = message;
        // Click the submit button
        let submitButton = document.querySelector('[aria-label="Send message"]');
        if (submitButton) {
            setTimeout(() => { submitButton.click(); }, 500);
        } else {
            console.log("Submit button not found");
        }
    }

    function AutoReload() {
        setInterval(() => {
            console.log("5 minutes elapsed - reloading page...");
            window.location.replace('https://gemini.google.com/app');
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
