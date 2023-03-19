const setup = () => {
    let input ;
    let gemeenten = [];
    input = prompt("Geef een gemeente in");
    while(input.toLowerCase().trim() !== 'stop'){
        gemeenten.push(input);
        input = prompt("Geef een gemeente in");
    }
    if(input === 'stop'){
    for(let i = 0; i < gemeenten.length; i++){
        var option = document.createElement("option");
        option.text = gemeenten[i];
        document.getElementById('list').add(option);
    }
    }
}


window.addEventListener("load", setup);