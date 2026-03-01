// ==UserScript==
// @name         Perplexity Usage
// @namespace    Browser Scripts
// @version      1.1
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

    function GetLastAnswer() {
        const messages = document.querySelectorAll('[id^="markdown-content-"]');
        const answer = messages.length ? messages[messages.length - 1].innerText.trim() : '';
        return answer;
    }

    async function AutoReload() {
        await sleep(300000); // 5 minutes
        console.log("5 minutes elapsed - reloading page...");
        window.location.replace('https://perplexity.ai');
    }

    // Messages
    const INITIAL_MESSAGE = "write 100,000 words novel about time travel. you can build this iteratively. dont ask me question, just do it. (write 3000 more words now)";
    const FOLLOWUP_MESSAGE = "just Help me start/continue to finish the 100,000 words time travel novel (write 3000 more words now)";

    function Start() {
        let count = 0;
        setInterval(() => {
            const answer = GetLastAnswer();
            const message = (count < 5) ? (INITIAL_MESSAGE + answer) : (FOLLOWUP_MESSAGE + answer);
            Chat(message);
            console.log(`Execution Count: ${count}`); count++;
        }, 10000); // 10 seconds between messages
    }

    AutoReload();
    Start();
})();
