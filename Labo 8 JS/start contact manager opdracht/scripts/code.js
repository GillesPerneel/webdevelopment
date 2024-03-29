let personen = [];
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    let invalid = document.querySelectorAll(".invalid");
    if(invalid.length === 0 ){

        let lstPersonen = document.querySelector('#lstPersonen');
        let persoon = {};
            //nieuw persoon
                persoon.voornaam = document.querySelector('#txtVoornaam').value,
                persoon.famillienaam = document.querySelector('#txtFamilienaam').value,
                persoon.geboortedatum = document.querySelector('#txtGeboorteDatum').value,
                persoon.email = document.querySelector('#txtEmail').value,
                persoon.aantalkinderen = document.querySelector('#txtAantalKinderen').value,

            personen.push(persoon);
            //aanmaken node + toevoegen aan list
            let select = document.querySelector('#lstPersonen');
            let node = document.createElement('option');
            node.textContent = persoon.voornaam + " " + persoon.famillienaam;
        if(lstPersonen.selectedIndex !== -1){
            select.replaceChild(node , select.childNodes[lstPersonen.selectedIndex]);
        } else {
            select.appendChild(node);
        }
    }
    else {
        console.log("Er is een fout ingegeven")
    }
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let inputs = document.querySelectorAll("input[type=text]");
    for(let i = 0 ; i < inputs.length ; i++){
        inputs[i].value = "";
    }

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const changeListener = (event) =>{
    if(event.target.tagName === 'OPTION'){
        index = event.target.index;
        let persoon = personen[index];
        document.querySelector('#txtVoornaam').value = persoon.voornaam;
        document.querySelector('#txtFamilienaam').value = persoon.famillienaam;
        document.querySelector('#txtGeboorteDatum').value = persoon.geboortedatum;
        document.querySelector('#txtEmail').value = persoon.email;
        document.querySelector('#txtAantalKinderen').value = persoon.aantalkinderen;

    }
    else {
        console.log("u heeft op de list box zelf gedrukt niet op een optie");
    }
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click" , changeListener)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);