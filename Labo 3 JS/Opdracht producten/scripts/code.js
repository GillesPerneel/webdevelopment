const setup = () => {

}

const update = () => {
    var aantal1 = document.getElementById("aantal1").value;
    var aantal2 = document.getElementById("aantal2").value;
    var aantal3 = document.getElementById("aantal3").value;
   var btw1 = parseFloat(document.getElementById("btw1").innerHTML);
    var btw2 = parseFloat(document.getElementById("btw2").innerHTML);
    var btw3 = parseFloat(document.getElementById("btw3").innerHTML);
    aantal1 = (aantal1 * 10) + ((aantal1 *10)/100*btw1);
    aantal2  = (aantal2 * 15) + ((aantal2 *15)/100*btw2);
    aantal3 = (aantal3 * 12.2) + ((aantal3 *12.2)/100*btw3);
    var totaalprijs = aantal1 + aantal2 + aantal3;
    document.getElementById("sub1").innerHTML =  aantal1.toFixed(2) + "Eur";
    document.getElementById("sub2").innerHTML =  aantal2.toFixed(2) + "Eur";
    document.getElementById("sub3").innerHTML =  aantal3.toFixed(2) + "Eur";
    document.getElementById("totaalprijs").innerHTML = totaalprijs.toFixed(2) + "Eur";
}

window.addEventListener("load", setup);