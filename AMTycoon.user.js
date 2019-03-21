// ==UserScript==
// @name         AM Add-On
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Airlines Manager
// @author       Smart Pilot
// @match        https://tycoon.airlines-manager.com/*
// @grant        none
// ==/UserScript==

function Idle() {
  setTimeout(Idle, 5000);

}

(function(window,undefined) {
  Idle();
})();
