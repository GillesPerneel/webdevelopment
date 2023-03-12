const setup = () => {
Button.addEventListener("click", spaties);
}
const spaties = () => {
    let input = document.getElementById("textInput").value;
    let output = input.split("").join(" ");
    console.log(output);
}
window.addEventListener("load", setup);