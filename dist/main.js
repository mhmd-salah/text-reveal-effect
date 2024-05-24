"use strict";
let pargraphs = [...document.querySelectorAll("p")];
let spans = [];
// pargraphs.forEach(pargraph => {
//   let htmlString = "";
//   let pArray = pargraph.textContent?.split("");
//   for (let i = 0; i < pArray!.length; i++){
//     htmlString = `<span>${pArray![i]}</span>`
//   }
//   pargraph.innerHTML = htmlString
// })
pargraphs.forEach(pargraph => {
    var _a;
    let htmlString = "";
    let pArray = (_a = pargraph.textContent) === null || _a === void 0 ? void 0 : _a.split("");
    for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
    }
    pargraph.innerHTML = htmlString;
});
spans = [...document.querySelectorAll("span")];
window.onscroll = function () {
    revealSpans();
};
let i = 0;
function revealSpans() {
    i = scrollY;
    for (let i = 0; i < scrollY; i++) {
        spans[i].style.opacity = "1";
        if (scrollY > spans.length) {
            break;
        }
    }
}
