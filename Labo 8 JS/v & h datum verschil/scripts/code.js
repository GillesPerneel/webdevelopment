const setup = () => {
let geboortedatum = new Date(2023,11,22);
let huidigedatum = new Date();

let aantalDagenTussen = ((geboortedatum - huidigedatum) / 1000) / 60 / 60 / 24;
console.log('het verschil tussen mijn geboorte datum: ' + geboortedatum.toLocaleDateString('NL-be')  +
    '\nen de huidige datum: ' + huidigedatum.toLocaleDateString('NL-be') +
    '\nis: ' + Math.round(aantalDagenTussen) + ' dagen' )
}
window.addEventListener("load", setup);