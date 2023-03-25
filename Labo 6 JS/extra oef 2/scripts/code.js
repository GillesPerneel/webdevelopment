const setup = () => {
let nodeList = document.querySelectorAll('li');


    for(let i = 0 ; i < nodeList.length ; i++){
    let nodeElement = nodeList[i];
    nodeElement.classList.add("listitems");
}
    let classe = document.createElement("style");
let node = document.createTextNode(".listitems { color : red }");
classe.appendChild(node);
document.body.appendChild(classe);

}
window.addEventListener("load" , setup);