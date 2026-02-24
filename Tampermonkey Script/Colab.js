// ==UserScript==
// @name         Colab
// @namespace    Browser Scripts
// @version      1.2
// @description  Keep Colab Active
// @author       You
// @match        https://*.colab.research.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function RunAll() {
        document.querySelector("#top-toolbar > colab-notebook-toolbar-run-button").shadowRoot.querySelector("#toolbar-run-button").click();
        await sleep(1000);
        document.querySelector("body > mwc-dialog > md-text-button:nth-child(3)").shadowRoot.querySelector("#button").click();
    }

    function ConnectButton() {
        console.log("Connect pushed");
        document.querySelector("#top-toolbar > colab-connectbutton").shadowRoot.querySelector("#connect").click();
    }

    setTimeout(RunAll, 5000)  // comment this out when use Colab seriously
    setInterval(ConnectButton, 60000);
})();