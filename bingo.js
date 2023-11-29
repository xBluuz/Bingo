var repetidas = [];
var bolita = 0;
function bola() {
    var bolita = Math.floor((Math.random() * 75) + 1)

    if (repetidas.indexOf(bolita) == -1) {
        var numero = document.getElementById(String(bolita));
        numero.className = "bal selecionado";
        repetidas.push(bolita);
        document.getElementById('numero').textContent = bolita;
        temp1 = setTimeout("bola()", 500);
    } else {
        bola();
        console.log("la bolita ya esta " + bolita);
    }
    
    start.style.display = "none";
    para.style.display = "block";
}
function pausa() {
    clearTimeout(temp1);
    start.style.display = "block";
    para.style.display = "none";
}