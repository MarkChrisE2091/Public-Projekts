// ==UserScript==
// @name         Perplexity Usage
// @namespace    Browser Scripts
// @version      1.2
// @description  Perplexity Usage
// @author       You
// @match        https://*.perplexity.ai/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function Chat(message) {
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
            setTimeout(() => { submitButton.click(); }, 500);
        } else {
            console.log("Submit button not found");
        }
    }

    function AutoReload() {
        setInterval(() => {
            console.log("5 minutes elapsed - reloading page...");
            window.location.href = "https://perplexity.ai";
        }, 300000); // 5 minutes
    }

    function Start(){
        let count = 0;
        let intervalId = setInterval(() => {
            if (count < 5){
                // Chat("write 20,000 words novel about space, no question asked, just do it!");
                Chat("write 100,000 words novel about time travel. you can build this iteratively");
                console.log(`Execution Count: ${count}`); count++;
            } else {
                // Chat("just CONTINUE to finish the 100,000 words novel");
                Chat("just Help me finish the 100,000 words novel");
                console.log(`Execution Count: ${count}`); count++;
            }
        }, 10000);
    }

    AutoReload();
    Start();
})();
