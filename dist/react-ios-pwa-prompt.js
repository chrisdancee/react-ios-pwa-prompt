!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-ios-pwa-prompt",["React"],t):"object"==typeof exports?exports["react-ios-pwa-prompt"]=t(require("react")):e["react-ios-pwa-prompt"]=t(e.React)}(global,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5)}([function(t,r){t.exports=e},function(e,t,r){var o=r(2),n=r(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1},c=(o(n,a),n.locals?n.locals:{});e.exports=c},function(e,t,r){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function i(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},o=[],n=0;n<e.length;n++){var a=e[n],l=t.base?a[0]+t.base:a[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var d=i(p),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:p,updater:v(f,t),references:1}),o.push(p)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function f(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,n);else{var a=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function u(e,t,r){var o=r.css,n=r.media,a=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function v(e,t){var r,o,n;if(t.singleton){var a=b++;r=m||(m=s(t)),o=f.bind(null,r,a,!1),n=f.bind(null,r,a,!0)}else r=s(t),o=u.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=i(r[o]);c[n].references--}for(var a=l(e,t),s=0;s<r.length;s++){var p=i(r[s]);0===c[p].references&&(c[p].updater(),c.splice(p,1))}r=a}}}},function(e,t,r){(t=r(4)(!1)).push([e.i,'._4e96{overflow:hidden}._132a{background-color:rgba(0,0,0,0.8);left:0;min-height:100vh;min-height:-webkit-fill-available;opacity:0;position:fixed;top:0;transition:opacity 0.2s ease-in;width:100vw;z-index:999999}._132a._7c0e{opacity:1;display:block}._132a.efc7{pointer-events:none;touch-action:none}@media (prefers-color-scheme: dark){._132a._20ef{background:rgba(10,10,10,0.5);color:rgba(235,235,245,0.6)}}._6733{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(250,250,250,0.8);border-radius:10px;bottom:0;color:black;filter:brightness(1.1);left:0;margin:0 8px 10px;overflow:hidden;position:fixed;transform:translateY(calc(100% + 10px));transition:transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);width:calc(100vw - 16px);z-index:999999}._6733._7c0e{transform:translateY(0);display:block}._6733.efc7{pointer-events:none;touch-action:none}._6733._20ef{background:rgba(255,255,255,0.6);filter:brightness(1.6)}@media (prefers-color-scheme: dark){._6733._20ef{background:rgba(65,65,65,0.7);filter:brightness(1.1)}}._199d{align-items:center;border-bottom:1px solid rgba(0,0,0,0.1);border-top:0px;border-left:0px;border-right:0px;border-width:0.5px;display:flex;flex-flow:row nowrap;justify-content:space-between;padding:13px 16px}._20ef ._199d{border-color:rgba(60,60,67,0.29)}@media (prefers-color-scheme: dark){._20ef ._199d{border-color:rgba(140,140,140,0.7)}}._199d .ab5d{color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:18px;font-weight:500;line-height:1.125;margin:0;padding:0}._20ef ._199d .ab5d{color:#000}@media (prefers-color-scheme: dark){._20ef ._199d .ab5d{color:#fff}}._199d ._6a7e{color:#2d7cf6;font-size:16px;padding:0;margin:0;border:0;background:transparent}._20ef ._199d ._6a7e{color:#0055b3}@media (prefers-color-scheme: dark){._20ef ._199d ._6a7e{color:#0984ff}}.ebda{display:flex;width:100%}.ebda .a91e{border-bottom:1px solid rgba(0,0,0,0.1);border-top:0px;border-left:0px;border-right:0px;border-width:0.5px;color:inherit;margin:0 16px;padding:16px;width:100%}._20ef .ebda .a91e{border-color:rgba(60,60,67,0.29)}@media (prefers-color-scheme: dark){._20ef .ebda .a91e{border-color:rgba(140,140,140,0.7)}}._7d3c{color:#7b7b7a;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:13px;line-height:17px;margin:0;padding:0}._7d3c.e161{font-weight:600}._20ef ._7d3c{color:rgba(60,60,67,0.6)}@media (prefers-color-scheme: dark){._20ef ._7d3c{border-color:rgba(235,235,245,0.6);color:rgba(235,235,245,0.6)}}.e6cc{color:inherit;margin:0 16px;padding:16px}.e6cc ._3183{align-items:center;display:flex;flex-flow:row nowrap;justify-content:flex-start;text-align:left;margin-bottom:16px}.e6cc ._3183:last-of-type{margin-bottom:0}.e6cc ._4408,.e6cc ._4b98{flex:0 0 auto;height:30px;margin-right:32px;width:25px}.e6cc ._4b98{color:#2d7cf6}._20ef .e6cc ._4b98{color:black;fill:black}@media (prefers-color-scheme: dark){._20ef .e6cc ._4b98{color:white;fill:white}}.e6cc ._4408{color:#2d7cf6;fill:#2d7cf6}._20ef .e6cc ._4408{color:#0055b3;fill:#0055b3}@media (prefers-color-scheme: dark){._20ef .e6cc ._4408{color:#0984ff;fill:#0984ff}}\n',""]),t.locals={noScroll:"_4e96",pwaPromptOverlay:"_132a",visible:"_7c0e",hidden:"efc7",modern:"_20ef",pwaPrompt:"_6733",pwaPromptHeader:"_199d",pwaPromptTitle:"ab5d",pwaPromptCancel:"_6a7e",pwaPromptBody:"ebda",pwaPromptDescription:"a91e",pwaPromptCopy:"_7d3c",bold:"e161",pwaPromptInstruction:"e6cc",pwaPromptInstructionStep:"_3183",pwaPromptShareIcon:"_4408",pwaPromptHomeIcon:"_4b98"},e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(c=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([n]).join("\n")}var c,i,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(n[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&n[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=function(e){var t=e.className,r=e.modern;return void 0!==r&&r?n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 566 670"},n.a.createElement("path",{d:"M255 12c4-4 10-8 16-8s12 3 16 8l94 89c3 4 6 7 8 12 2 6 0 14-5 19-7 8-20 9-28 2l-7-7-57-60 2 54v276c0 12-10 22-22 22-12 1-24-10-23-22V110l1-43-60 65c-5 5-13 8-21 6a19 19 0 0 1-16-17c-1-7 2-13 7-18l95-91z"}),n.a.createElement("path",{d:"M43 207c16-17 40-23 63-23h83v46h-79c-12 0-25 3-33 13-8 9-10 21-10 33v260c0 13 0 27 6 38 5 12 18 18 30 19l14 1h302c14 0 28 0 40-8 11-7 16-21 16-34V276c0-11-2-24-9-33-8-10-22-13-34-13h-78v-46h75c13 0 25 1 37 4 16 4 31 13 41 27 11 17 14 37 14 57v280c0 20-3 41-15 58a71 71 0 0 1-45 27c-11 2-23 3-34 3H109c-19-1-40-4-56-15-14-9-23-23-27-38-4-12-5-25-5-38V270c1-22 6-47 22-63z"})):n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 120 169"},n.a.createElement("g",{fill:"currentColor"},n.a.createElement("path",{d:"M60 0l28 28-2 2a586 586 0 0 0-4 4L64 15v90h-8V15L38 34l-4-4-2-2L60 0z"}),n.a.createElement("path",{d:"M0 49h44v8H8v104h104V57H76v-8h44v120H0V49z"})))},c=function(e){var t=e.className,r=e.modern;return void 0!==r&&r?n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 578 584"},n.a.createElement("path",{d:"M101 35l19-1h333c12 0 23 0 35 3 17 3 34 12 44 27 13 16 16 38 16 58v329c0 19 0 39-8 57a65 65 0 0 1-37 37c-18 7-38 7-57 7H130c-21 1-44 0-63-10-14-7-25-20-30-34-6-15-8-30-8-45V121c1-21 5-44 19-61 13-16 33-23 53-25m7 46c-10 1-19 6-24 14-7 8-9 20-9 31v334c0 12 2 25 10 34 9 10 23 12 35 12h336c14 1 30-3 38-15 6-9 8-20 8-31V125c0-12-2-24-10-33-9-9-22-12-35-12H121l-13 1z"}),n.a.createElement("path",{d:"M271 161c9-11 31-10 38 4 3 5 3 11 3 17v87h88c7 0 16 1 21 7 6 6 7 14 6 22a21 21 0 0 1-10 14c-5 4-11 5-17 5h-88v82c0 7-1 15-6 20-10 10-29 10-37-2-3-6-4-13-4-19v-81h-87c-8-1-17-3-23-9-5-6-6-15-4-22a21 21 0 0 1 11-14c6-3 13-3 19-3h84v-88c0-7 1-14 6-20z"})):n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"55.99425507 31.98999977 157.76574707 157.76371765"},n.a.createElement("path",{fill:"#58595b",d:"M90.49 32.83a54.6 54.6 0 019.55-.84c23.98.03 47.96 0 71.94.01 8.5.07 17.3 1.74 24.4 6.65 10.94 7.28 16.52 20.54 17.35 33.3.06 26.03 0 52.06.03 78.08 0 10.16-3.59 20.56-10.95 27.73-7.93 7.61-18.94 11.43-29.79 11.98-25.71.03-51.42 0-77.12.01-10.37-.11-21.01-3.77-28.17-11.48-8.22-8.9-11.72-21.29-11.73-33.21.01-23.03-.03-46.05.02-69.07-.01-9.14 1.33-18.71 6.65-26.4 6.21-9.4 16.97-14.79 27.82-16.76m38.18 41.09c-.05 10.25.01 20.5 0 30.75-9.58-.03-19.16.02-28.75-.04-2.27.08-4.98-.25-6.68 1.61-2.84 2.34-2.75 7.12.01 9.48 1.8 1.69 4.46 1.57 6.75 1.64 9.56-.04 19.12-.01 28.67-.03.02 10.24-.06 20.48.01 30.72-.14 2.66 1.36 5.4 3.95 6.3 3.66 1.66 8.52-1.13 8.61-5.23.26-10.59.02-21.2.09-31.79 9.88 0 19.76.02 29.64.01 2.74.12 5.85-.67 7.14-3.34 2.23-3.75-.61-9.34-5.08-9.29-10.57-.14-21.14-.01-31.7-.04-.01-10.25.04-20.49 0-30.74.3-3.5-2.66-7.09-6.3-6.79-3.65-.33-6.66 3.26-6.36 6.78z"}),n.a.createElement("path",{fill:"transparent",d:"M128.67 73.92c-.3-3.52 2.71-7.11 6.36-6.78 3.64-.3 6.6 3.29 6.3 6.79.04 10.25-.01 20.49 0 30.74 10.56.03 21.13-.1 31.7.04 4.47-.05 7.31 5.54 5.08 9.29-1.29 2.67-4.4 3.46-7.14 3.34-9.88.01-19.76-.01-29.64-.01-.07 10.59.17 21.2-.09 31.79-.09 4.1-4.95 6.89-8.61 5.23-2.59-.9-4.09-3.64-3.95-6.3-.07-10.24.01-20.48-.01-30.72-9.55.02-19.11-.01-28.67.03-2.29-.07-4.95.05-6.75-1.64-2.76-2.36-2.85-7.14-.01-9.48 1.7-1.86 4.41-1.53 6.68-1.61 9.59.06 19.17.01 28.75.04.01-10.25-.05-20.5 0-30.75z"}))},i=r(1),l=r.n(i);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],o=!0,n=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var u=function(e){var t=e.delay,r=e.copyTitle,i=e.copyBody,f=e.copyAddHomeButtonLabel,u=e.copyShareButtonLabel,m=e.copyClosePrompt,b=e.permanentlyHideOnDismiss,v=e.promptData,y=e.maxVisits,h=e.onClose,g=d(Object(o.useState)(!Boolean(t)),2),w=g[0],O=g[1];Object(o.useEffect)((function(){t&&setTimeout((function(){document.activeElement&&document.activeElement.blur(),O(!0)}),t)}),[]),Object(o.useEffect)((function(){w&&document.body.classList.add(l.a.noScroll)}),[w]);var P=/OS (13|14)/.test(window.navigator.userAgent),_=w?l.a.visible:l.a.hidden,x=P?l.a.modern:"legacy",S=function(e){document.body.classList.remove(l.a.noScroll),O(!1),b&&localStorage.setItem("iosPwaPrompt",JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},v,{visits:y}))),"function"==typeof h&&h(e)},j=function(e){w||(e.currentTarget.style.display="none")};return n.a.createElement(o.Fragment,null,n.a.createElement("div",{className:"".concat(l.a.pwaPromptOverlay," ").concat(_," ").concat(x," iOSPWA-overlay"),"aria-label":"Close",role:"button",onClick:S,onTransitionEnd:j}),n.a.createElement("div",{className:"".concat(l.a.pwaPrompt," ").concat(_," ").concat(x," iOSPWA-container"),"aria-describedby":"pwa-prompt-description","aria-labelledby":"pwa-prompt-title",role:"dialog",onTransitionEnd:j},n.a.createElement("div",{className:"".concat(l.a.pwaPromptHeader," iOSPWA-header")},n.a.createElement("p",{id:"pwa-prompt-title",className:"".concat(l.a.pwaPromptTitle," iOSPWA-title")},r),n.a.createElement("button",{className:"".concat(l.a.pwaPromptCancel," iOSPWA-cancel"),onClick:S},m)),n.a.createElement("div",{className:"".concat(l.a.pwaPromptBody," iOSPWA-body")},n.a.createElement("div",{className:"".concat(l.a.pwaPromptDescription," iOSPWA-description")},n.a.createElement("p",{id:"pwa-prompt-description",className:"".concat(l.a.pwaPromptCopy," iOSPWA-description-copy")},i))),n.a.createElement("div",{className:"".concat(l.a.pwaPromptInstruction," iOSPWA-steps")},n.a.createElement("div",{className:"".concat(l.a.pwaPromptInstructionStep," iOSPWA-step1")},n.a.createElement(a,{className:"".concat(l.a.pwaPromptShareIcon," iOSPWA-step1-icon"),modern:P}),n.a.createElement("p",{className:"".concat(l.a.pwaPromptCopy," ").concat(l.a.bold," iOSPWA-step1-copy")},u)),n.a.createElement("div",{className:"".concat(l.a.pwaPromptInstructionStep," iOSPWA-step2")},n.a.createElement(c,{className:"".concat(l.a.pwaPromptHomeIcon," iOSPWA-step2-icon"),modern:P}),n.a.createElement("p",{className:"".concat(l.a.pwaPromptCopy," ").concat(l.a.bold," iOSPWA-step2-copy")},f)))))};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t,r,o,a,c=e.timesToShow,i=void 0===c?1:c,l=e.promptOnVisit,s=void 0===l?1:l,p=e.permanentlyHideOnDismiss,d=void 0===p||p,f=e.copyTitle,v=void 0===f?"Add to Home Screen":f,y=e.copyBody,h=void 0===y?"This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.":y,g=e.copyShareButtonLabel,w=void 0===g?"1) Press the 'Share' button on the menu bar below.":g,O=e.copyAddHomeButtonLabel,P=void 0===O?"2) Press 'Add to Home Screen'.":O,_=e.copyClosePrompt,x=void 0===_?"Cancel":_,S=e.delay,j=void 0===S?1e3:S,E=e.debug,A=void 0!==E&&E,N=e.onClose,k=void 0===N?function(){}:N,C=JSON.parse(localStorage.getItem("iosPwaPrompt"));if(null===C&&(C={isiOS:(t=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),r="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,o="standalone"in window.navigator&&window.navigator.standalone,a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),(t||r)&&!o&&a),visits:0},localStorage.setItem("iosPwaPrompt",JSON.stringify(C))),C.isiOS||A){var M=C.visits+1>=s;if((C.visits+1<s+i||A)&&(localStorage.setItem("iosPwaPrompt",JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},C,{visits:C.visits+1}))),M||A))return n.a.createElement(u,{delay:j,copyTitle:v,copyBody:h,copyAddHomeButtonLabel:P,copyShareButtonLabel:w,copyClosePrompt:x,permanentlyHideOnDismiss:d,promptData:C,maxVisits:i+s,onClose:k})}return null}}])}));