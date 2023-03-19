const setup = () => {
knop.addEventListener('click' , ToonResultaat)
}

const ToonResultaat =() =>{
let roker = document.getElementById('roker');
let resultaat = '';
if(roker){
    resultaat += "is een roker\n";
} else {
    resultaat += "is geen roker\n";
}

    let moedertaal = document.querySelector('input[name="taal"]:checked').value;
    resultaat += 'moeder taal is: ' + moedertaal + "\n";


    let favorieteBuurland = document.getElementById('favBuurLand').value;
    resultaat += "favoriete buurland is " + favorieteBuurland + "\n";

    const select = document.getElementById('multiple');
    const selectedValues = Array.from(select.selectedOptions, option => option.value);
    resultaat += 'Bestelling bestaat uit: ' + selectedValues.toString() + "\n";

    console.log(resultaat);
}

window.addEventListener("load", setup);