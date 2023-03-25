const setup = () => {
let p = document.querySelector('p');
let  oldText = p.childNodes[0];
let newText = document.createTextNode("Good Job");
p.replaceChild(newText , oldText);
}
window.addEventListener("load", setup);