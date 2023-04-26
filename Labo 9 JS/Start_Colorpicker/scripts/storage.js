

const storeSliderValues = () => {
let blue = document.querySelector('#sldBlue');
let green = document.querySelector('#sldGreen');
let red = document.querySelector('#sldRed');
localStorage.setItem("blue",blue.value);
localStorage.setItem("green",green.value);
localStorage.setItem("red",red.value);
};

const restoreSliderValues = () => {
    let blue = document.querySelector('#sldBlue');
    let green = document.querySelector('#sldGreen');
    let red = document.querySelector('#sldRed');
    let newblue = localStorage.getItem("blue");
    let newgreen = localStorage.getItem("green");
    let newred = localStorage.getItem("red");
    blue.value = newblue;
    green.value = newgreen;
    red.value = newred;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let lijstAlleSwatches = document.querySelectorAll('.swatch');
    let alleswatchitem = document.querySelector('#swatchComponents');


 let kleurinfo = [];

 lijstAlleSwatches.forEach((swatch) => {
     let red = swatch.getAttribute("data-red");
     let green = swatch.getAttribute("data-green");
     let blue = swatch.getAttribute("data-blue");
   kleurinfo.push({red:red , green:green , blue:blue});//we maken gebruik van json notatie
 })

 localStorage.setItem("kleurinfo",JSON.stringify(kleurinfo));

};

const restoreSwatches = () => {
   let swatchitem = document.querySelector('#swatchComponents');
   let opgeslagenSwatches = localStorage.getItem("kleurinfo");

   if(opgeslagenSwatches === null){
       console.log("er is niets opgeslagen");
   } else {
       let opgeslagenSwatchinText = JSON.parse(opgeslagenSwatches);
       for(let i = 1; i < opgeslagenSwatchinText.length ; i++){
           let swatch = opgeslagenSwatchinText[i];
           let red = swatch.red;
           let green = swatch.green;
           let blue = swatch.blue;
           let nieuweSwatch = buildSwatchComponent(red,green,blue);
           swatchitem.appendChild(nieuweSwatch);
       }
   }
};
