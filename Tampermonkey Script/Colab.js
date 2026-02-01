// ==UserScript==
// @name         Colab
// @namespace    Browser Scripts
// @version      1.0
// @description  Keep Colab Active
// @author       You
// @match        https://*.colab.research.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function ConnectButton() {
        console.log("Connect pushed");
        document.querySelector("#top-toolbar > colab-connectbutton").shadowRoot.querySelector("#connect").click()
    }
    setInterval(ConnectButton, 60000);

})();