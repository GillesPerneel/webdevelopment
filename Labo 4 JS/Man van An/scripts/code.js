const setup = () => {
document.addEventListener("Button" , ZoekAn);
}
const ZoekAn = () => {
    let input = document.getElementById("textInput").value;
    let count;
    input.lastIndex('An',count);
    console.log(count);
}
window.addEventListener("load", setup);