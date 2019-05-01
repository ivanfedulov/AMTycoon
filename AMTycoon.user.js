// ==UserScript==
// @name         AM Add-On
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Airlines Manager
// @author       Smart Pilot
// @match        https://tycoon.airlines-manager.com/aircraft
// @grant        none
// @include      https://apis.google.com/js/api.js
// ==/UserScript==


(function(window,undefined) {
  var divRename = $("<div/>", {
      id: "divRename",
      css: {
          "margin-bottom" : "10px"
      }
  }).insertBefore($("#hubDropdown").parent());
  var divTitle = $("<div/>", {
      id: "divRenameTitle",
      css: {
          "margin-bottom" : "10px"
      }
  }).appendTo(divRename);
  divTitle.html("<b>RENAME AIRCRAFTS:</b>");
  $("<span/>").appendTo(divRename).html("Prefix:");
  var inputPrefix = $("<input/>", {
      type: "text",
      id: "iRenPrefix",
      css: {
          "margin-left"  : "5px",
          "margin-right" : "20px"
      }
  }).appendTo(divRename);
  $("<span/>").appendTo(divRename).html("Pattern:");
  var inputPattern = $("<input/>", {
      type: "text",
      id: "iRenPattern",
      css: {
        "margin-left" : "5px"
      }
  }).appendTo(divRename);
  var buttonRename = $("<input/>", {
      type: "button",
      value: "RENAME",
      id: "iRenButtonRename",
      css: {
        "margin-left" : "10px"
      }
  }).appendTo(divRename);


})();
