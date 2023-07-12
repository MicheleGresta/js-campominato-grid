`use strict`

const btnPlay = document.querySelector(".btn-play");
const contenitoreGioco = document.querySelector(".container-small");




btnPlay.addEventListener("click", bottoneGioca);

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
   creaCaselle();
    
};


function creaCaselle () {
    // creo un ciclo per creare casella per casella, per un totale di numeroCaselle preso sopra
    for (let i = 0; i < numeroCaselle; i++) {
        // creo elemento div o box o casella come ti pare
        const square = document.createElement("div");
        // decido quante caselle devono stare in una riga, in questo caso faccio una radice del numeroCaselle
        const squaresPerRow = Math.sqrt(numeroCaselle); 

        square.classList.add("squares");
        square.textContent = (i+1).toString();
        // assegno la grandezza delle caselle dividendo il loro 100% per il  risultato della radice sopra
        square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

        square.addEventListener("click", function () {
            square.classList.toggle("toggleColor");            
        })
        // attacco tutto al contenitore padre
        contenitoreGioco.append(square);
    }
}
