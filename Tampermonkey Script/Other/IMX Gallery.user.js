// ==UserScript==
// @name         IMX Gallery
// @namespace    Browser Scripts
// @version      1.0
// @description  List of actions for IMX Gallery
// @author       You
// @match        https://*.imx.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function passRobotTest(){
        let button = document.querySelector('input[type="submit"]');
        if (button){
            button.click();         // Found it! Click and stop
        }
        else{
            console.log("button doesn't exists. Retry again in a few second");
            setTimeout(passRobotTest, 500);  // Not found, try again in 500ms
        }
    }

    passRobotTest();
})();