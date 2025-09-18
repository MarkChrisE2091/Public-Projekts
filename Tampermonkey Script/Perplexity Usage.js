// ==UserScript==
// @name         Perplexity Usage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Perplexity Usage
// @author       You
// @match        https://perplexity.ai/*
// @match        https://*.perplexity.ai/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function Chat(message){
        // Get the Lexical editor element
        let chatBox = document.getElementById("ask-input");
        
        chatBox.focus();    // Focus the editor first
        
        // Lexical editor prevents direct text modification
        // Working with Lexical (bypasses Lexical protection)
        document.execCommand('selectAll');  // Select all text
        document.execCommand('delete');     // Delete text
        document.execCommand('insertText', false, message);  // Insert text
        
        // Click the submit button
        document.querySelector('[data-testid="submit-button"]')?.click();
    }

    function Start(){
        let count = 0;
        let intervalId = setInterval(() => {
            if (count >= 5) {
                clearInterval(intervalId);
                console.log("Start loop completed after 5 executions");
                return;
            }

            Chat("write 200,000 words novel about space, no question asked, just do it!");
            console.log(`Execution Count: ${count}`); count++;
        }, 10000);
    }

    function Continue(){
        let count = 0;
        setInterval(() => {
            Chat("just CONTINUE to finish the 200,000 words novel");
            console.log(`Execution Count: ${count}`); count++;
        }, 10000);
    }

    Start(); Continue();
})();
