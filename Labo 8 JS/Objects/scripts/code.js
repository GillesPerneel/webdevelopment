const setup = () => {
    let student1 = {}; // een leeg object
    student1.voornaam="jefken";
    student1.geboorteDatum=new Date("1999-01-22");
    student1.adres={};
    student1.adres.gemeente="Bissegem";
    student1.adres.postcode = '8501';

   //const myJSON = '{"voornaam":"Jefken","geboorteDatum":"1999-01-22","adres.gemeente":"Bissegem","adres.postcode":"8501"}';
    let student1JSON = JSON.stringify(student1);
    console.log(student1JSON);


    let newObject =  '{"voornaam":"jefken","geboorteDatum":"1999-01-22T00:00:00.000Z","adres":{"gemeente":"Bissegem","postcode":"8501"}}';
    let objecttoString  = JSON.parse(newObject);
    console.log(objecttoString["voornaam"]);
}
window.addEventListener("load", setup);