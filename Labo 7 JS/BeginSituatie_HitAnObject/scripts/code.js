let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    btn.addEventListener('click', startGame);
    let image = document.querySelector("img");
        image.addEventListener('click', gameUpdate);
        changeImage();
};
const startGame = () =>{
    moveSprite();
}
const gameUpdate=()=>{
    clearTimeout(global.timeoutId);
    checkImage();
    moveSprite();
}
const moveSprite = () => {
    // Deze function wordt opgeroepen telkens de gebruiker
    // op het speelveld klikt.
    let sprite=document.getElementsByClassName("sprite")[0];
    let speelveld=document.getElementById("playField");

    let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight=speelveld.clientHeight - sprite.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);

    sprite.style.left=left+"px";
    sprite.style.top=top+"px";

    global.timeoutId=setTimeout(moveSprite , global.MOVE_DELAY);
    changeImage();
    changeScore();
}

const changeImage = () =>{
    target.setAttribute("src","" + global.IMAGE_PATH_PREFIX + Math.floor(Math.random()*5) + global.IMAGE_PATH_SUFFIX);
}
const checkImage = () =>{
    if(target.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX){
        clearTimeout(global.timeoutId);
        window.alert("U HEEFT VERLOREN");
    }
}
const changeScore=()=>{
    if(target.getAttribute("src") !== global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX){
        global.score++;
        let scoreBord = document.getElementById('score');
        scoreBord.textContent = "Score: " + global.score;
    }
}

window.addEventListener("load", setup);


