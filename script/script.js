`use strict`

const btnPlay = document.querySelector(".btn-play");
const contenitoreGioco = document.querySelector(".container-small");




btnPlay.addEventListener("click", bottoneGioca);

let rigaCaselle = 0


function bottoneGioca() {
    contenitoreGioco.innerHTML = "";
    const difficulty = document.getElementById("select-level").value;
    console.log(difficulty);

    if (difficulty === "Facile") {
        numeroCaselle = 100;
    } else if (difficulty === "Intermedio") {
        numeroCaselle = 81;
    } else if (difficulty === "Difficile") {
        numeroCaselle = 49;
    }
    console.log(numeroCaselle);

    const grigliaPiena = creaGriglia(numeroCaselle);

    for (i = 0; i < grigliaPiena.length; i++) {
        contenitoreGioco.append(grigliaPiena[i]);
        console.log(grigliaPiena);
    }

};

function casellaSingola(contenuto, numeroCaselle) {
    const div = document.createElement("div");
    const casellePerRiga = Math.sqrt(numeroCaselle);
    div.classList.add("squares");
    div.style.flexBasis = `calc(100% / ${casellePerRiga})`;
    console.log(casellePerRiga);

    return div;
}

function creaGriglia(numeroCaselle) {
    const griglia = [];

    for (i = 0; i < numeroCaselle; i++) {

        const setCasella = casellaSingola("numero " + (i + 1), numeroCaselle);

        griglia.push(setCasella);
    }
    return griglia;
}

