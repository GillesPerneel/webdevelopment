const setup = () => {
let inputtext = 'onoorbaar';
for(let i = 0 ; i <= inputtext.length - 3 ; i++){
    console.log(inputtext.substring(i,i + 3))
}
}
window.addEventListener("load", setup);