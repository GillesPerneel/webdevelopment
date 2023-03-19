const setup = () => {
    let zinnetje = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let arrayvanwoorden = zinnetje.split(" ");

    for (let i = 0; i < arrayvanwoorden.length; i++) {
        if (arrayvanwoorden[i] === "de") {
            arrayvanwoorden[i] = "het";
        }
    }

    console.log(arrayvanwoorden.join(" "));
}
window.addEventListener("load", setup);