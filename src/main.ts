let pargraphs = [...document.querySelectorAll("p")] as HTMLParagraphElement[]
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
  let htmlString = "";
  let pArray = pargraph.textContent?.split("")
  for (let i = 0; i < pArray!.length; i++){
    htmlString += `<span>${pArray![i]}</span>`
  }
  pargraph.innerHTML = htmlString
})