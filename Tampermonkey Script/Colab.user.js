// ==UserScript==
// @name         Colab
// @namespace    Browser Scripts
// @version      1.5
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
        await sleep(5000);
        document.querySelector("body > mwc-dialog > md-text-button:nth-child(3)")?.shadowRoot.querySelector("#button").click();
        document.querySelector("body > md-dialog > div:nth-child(3) > md-filled-button")?.shadowRoot.querySelector("#button").click();
    }

    function ConnectButton() {
        console.log("Connect pushed");
        document.querySelector("#top-toolbar > colab-connectbutton")?.shadowRoot.querySelector("#connect").click();
    }

    setTimeout(RunAll, 100 * 1000)  // comment this out when use Colab seriously
    setInterval(ConnectButton, 60 * 1000);
})();