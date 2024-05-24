let pargraphs = [...document.querySelectorAll("p")] as HTMLParagraphElement[]
let spans   =  [] as HTMLSpanElement[];

// pargraphs.forEach(pargraph => {
//   let htmlString = "";
//   let pArray = pargraph.textContent?.split("");
//   for (let i = 0; i < pArray!.length; i++){
//     htmlString = `<span>${pArray![i]}</span>`
//   }
//   pargraph.innerHTML = htmlString
// })
pargraphs.forEach(pargraph => {
  let htmlString = "";
  let pArray = pargraph.textContent?.split("")
  for (let i = 0; i < pArray!.length; i++){
    htmlString += `<span>${pArray![i]}</span>`
  }
  pargraph.innerHTML = htmlString
});

spans = [...document.querySelectorAll("span")] as HTMLSpanElement[];


window.onscroll = function () {
  revealSpans()
};

function revealSpans () {
  for (let i = 0; i < scrollY; i++){
    spans[i].style.opacity = "1"
    spans[i].className = "active"
    if (scrollY > spans.length) {
      break;
    }
  }
}