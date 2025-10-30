// ==UserScript==
// @name         ChatGPT Usage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ChatGPT Usage
// @author       You
// @match        https://*.chatgpt.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function Chat(message){
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
    
    function Start(){
        let count = 0;
        let intervalId = setInterval(() => {
            if (count < 5){
                // Chat("write 20,000 words novel about space, no question asked, just do it!");
                Chat("write 20,000 words essay about time travel!");
                console.log(`Execution Count: ${count}`); count++;
            } else {
                // Chat("just CONTINUE to finish the 20,000 words novel");
                Chat("just Help me finish the 20,000 words essay");
                console.log(`Execution Count: ${count}`); count++;
            }
        }, 10000);
    }

    AutoReload();
    Start();
})();
