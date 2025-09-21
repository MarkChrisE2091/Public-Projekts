// ==UserScript==
// @name         Kaggle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  List of actions for Kaggle
// @author       You
// @match        https://kaggle.com/*
// @match        https://*.kaggle.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideMenu(){
        let menuButton = document.querySelector('button[aria-label="Navigation menu"]');
        if (menuButton){
            menuButton.click();         // Found it! Click and stop
        }
        else{
            console.log("button doesn't exists. Retry again in a few second");
            setTimeout(hideMenu, 500);  // Not found, try again in 500ms
        }
    }

    hideMenu();
})();