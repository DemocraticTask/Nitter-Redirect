// ==UserScript==
// @name         Nitter Redirect
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Redirects from twitter.com or x.com to nitter.net while preserving the URL path and parameters
// @author       DP
// @match        *://twitter.com/*
// @match        *://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const domainsToRedirect = ['twitter.com', 'x.com'];
    if (domainsToRedirect.includes(window.location.hostname)) {
        let newUrl = window.location.href.replace(window.location.hostname, 'nitter.net');
        window.location.replace(newUrl);
    }
})();