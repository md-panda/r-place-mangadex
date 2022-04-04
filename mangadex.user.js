// ==UserScript==
// @name         Reddit Place - MangaDex army
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MangaDex logo goooooo
// @author       Adcoss95
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://mangadex.org/favicon.ico
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/md-panda/r-place-mangadex/raw/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            return i;
        })())
 
    }, false);
 
}