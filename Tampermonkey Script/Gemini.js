// ==UserScript==
// @name         Gemini Usage
// @namespace    Browser Scripts
// @version      1.2
// @description  Gemini Usage
// @author       You
// @match        https://gemini.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function Chat(message) {
        let chatBox = document.querySelector('[class^="ql-editor"]');
        chatBox.textContent = message;
        chatBox.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter', bubbles: true}));
    }

    function AutoReload() {
        setInterval(() => {
            console.log("5 minutes elapsed - reloading page...");
            window.location.href = "https://gemini.google.com";
        }, 1200000); // 20 minutes
    }

    function Start(){
        let count = 0;
        let intervalId = setInterval(() => {
            if (count < 5){
                Chat("write 100,000 words novel about time travel. you can build this iteratively");
                console.log(`Execution Count: ${count}`); count++;
            } else {
                Chat("just Help me finish the 100,000 words novel");
                console.log(`Execution Count: ${count}`); count++;
            }
        }, 10000);
    }

    AutoReload();
    Start();
})();
