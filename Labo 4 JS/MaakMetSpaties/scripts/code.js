const setup = () => {
    Button.addEventListener("click", MaakMetSpaties);
}
const MaakMetSpaties = (inputText) => {
    inputText = document.getElementById("textInput").value;
    let result = inputText.split("").join(" ");
    console.log(result);
}
window.addEventListener("load", setup);