function ligarDesliga() {
    var lampada_ligado = "images/lampada-acesa.jpg";
    var lampada_desligado = "images/lampada-apagada.jpg";

    if (document.getElementById("lamp").src.match("lampada-acesa")) {
        document.getElementById("lamp").src = lampada_desligado;
    } else {
        document.getElementById("lamp").src = lampada_ligado;
    }
}

document.getElementById("lamp").addEventListener("click", ligarDesliga);
