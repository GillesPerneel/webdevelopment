const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let saveBTN = document.querySelector('#btn');

    for (let i= 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update)
        sliders[i].addEventListener("input", update)
    }
    update();


    saveBTN.addEventListener('click' , addColorToDiv);
};

const update = () => {
    //red
 let red= document.getElementById("sldRed").value;
 document.getElementById("lblRed").innerHTML=red;

 //blue
 let blue= document.getElementById("sldBlue").value;
 document.getElementById("lblBlue").innerHTML=blue;

 //green
 let green= document.getElementById("sldGreen").value;
 document.getElementById("lblGreen").innerHTML=green;



//swatch
 let swatch=document.getElementById("swatch");
 swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

};

const addColorToDiv = () => {

    let red= document.getElementById("sldRed").value;
    let blue= document.getElementById("sldBlue").value;
    let green= document.getElementById("sldGreen").value;

    let divMetKleur = document.createElement('div');
    divMetKleur.style.width = '30px';
    divMetKleur.style.height = '30px';

    divMetKleur.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    let colorDiv = document.querySelector('#ColorSaves');

    colorDiv.appendChild(divMetKleur);

    console.log('Correct Toegevoegd');

}

window.addEventListener("load", setup);