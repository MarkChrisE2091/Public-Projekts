// ==UserScript==
// @name         Perplexity Usage
// @namespace    Browser Scripts
// @version      2.4
// @description  Perplexity Usage
// @author       You
// @match        https://*.perplexity.ai/*
// @grant        GM_openInTab
// @grant        window.close
// ==/UserScript==

(function () {
    "use strict";
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function Chat(message) {
        // Get the Lexical editor element
        let chatBox = document.getElementById("ask-input");
        chatBox.focus();    // Focus the editor first
        // Lexical editor prevents direct text modification
        // Working with Lexical (bypasses Lexical protection)
        document.execCommand('selectAll');  // Select all text
        document.execCommand('delete');     // Delete text
        document.execCommand('insertText', false, message);  // Insert text
        // Click the submit button
        let submitButton = document.querySelector('[aria-label="Submit"]');
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
        GM_openInTab('https://perplexity.ai', { active: true });
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
