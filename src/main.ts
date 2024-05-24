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

  let i = 0;
setInterval(() => {
  spans[i].style.opacity = "1";
  i = i + 1;
},100)