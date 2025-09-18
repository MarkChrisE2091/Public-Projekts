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
        let chatBox = document.getElementById("ask-input").getElementsByTagName("p")[0];
        // let newSpan = document.createElement("span");
        // newSpan.textContent = "Hello World!";
        // chatBox.appendChild(newSpan);

        chatBox.getElementsByTagName("span")[0].textContent = "Hello World!";
        console.log(chatBox.getElementsByTagName("span")[0].textContent);


        chatBox.textContent = message;
        chatBox.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    }

    function Start(){
        let count = 0;
        setInterval(() => {
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
