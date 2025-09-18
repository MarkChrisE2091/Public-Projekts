// ==UserScript==
// @name         ChatGPT Usage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ChatGPT Usage
// @author       You
// @match        https://chatgpt.com/*
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
