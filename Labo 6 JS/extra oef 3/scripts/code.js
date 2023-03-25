const setup = () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener('click' , addpElement);

}

const addpElement = () =>{
    let div = document.querySelector('#myDIV');
    let textPElement = document.getElementById('text').value;
    let append  = document.createElement('p');
    append.textContent = textPElement;
    div.appendChild(append);

}
window.addEventListener("load", setup);