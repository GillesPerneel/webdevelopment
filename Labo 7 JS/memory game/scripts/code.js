let global
{
    let AANTAL_HORIZONTAAL=4;
    let AANTAL_VERTICAAL=3;
    let AANTAL_KAARTEN=6;
}
const setup = () => {
    let divMetImages = document.querySelector('#GameField');
 for(let i = 1 ; i <= 6 ; i++){
     let imageElement = document.createElement("img");
     let imageElement2 = document.createElement("img");
     imageElement.src = "pictures/kaart" + i + ".png";
     imageElement2.src = "pictures/kaart" + i + ".png";
     divMetImages.appendChild(imageElement);
     divMetImages.appendChild(imageElement2);
 }

}
window.addEventListener("load", setup);