// ==UserScript==
// @name         Webtext Fetch
// @namespace    Browser Scripts
// @version      1.0
// @description  Fetch text content from a url
// @author       You
// @match        https://*.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    async function fetchContent(url) {
        console.log("Hello, content")
        const response = await fetch(url);
        const text = await response.text();
        return text;
    }

    let content = await fetchContent("https://raw.githubusercontent.com/MarkChrisE2091/Public-Projekts/refs/heads/main/Tampermonkey%20Script/Template.js")
    console.log(content)
})();