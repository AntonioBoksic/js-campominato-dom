// creazione variabile container generale dove inserire contenitore griglia
const centerContainer = document.getElementById("centerContainer");

// creazione bottone
const buttonPlay = document.getElementById("buttonPlay");

// creo variaile dove tenere conto dei click fatti
let punteggio = 0;

// quando clicco bottone:
buttonPlay.addEventListener("click",
    function() {

        // crea contenitore griglia
        const squaresContainer = document.createElement("div");
        squaresContainer.classList.add("squaresContainer");
        centerContainer.append(squaresContainer);
        

        //SECONDA PARTE ESERCIZIO
        //CREAZIONE 16 BOMBE
        //CREARE UN ARRAY DI 16 NUMERI CASUALI
        let bombsArray = [];
        bombsArray = createNumRandomOrderArr(1,16)
        console.log(bombsArray);
        
        

        // FOR PER CREAZIONE/INSERIMENTO/CLICK QUADRATI
        for (let i = 1; i <= 100; i++) {
            

            // creo quadrato
            const square = createSquare("div" , "square")

            // inserisco numero nel quadrato
            square.append(i)
            // inserisco quadrato nel container
            squaresContainer.append(square)    
            
            // rendo cliccabile il quadrato
            square.addEventListener("click",
                function() {

                    if (bombsArray.includes(i)) {
                square.classList.add("red")
                alert("hai perso")
                    } 
                    else {
                // diventa blu quando lo clicco
                square.classList.add("blue")
                // ogni volta che clicco un blu faccio un punto e lo metto nella variabile "punteggio"
                punteggio = punteggio +1
                    }
                // stampo in console quadrato cliccato
                console.log(square.innerHTML)

                // stampo in console punteggio

                console.log(`il tuo punteggio è ${punteggio}`)


                if ( punteggio === 5 ) {alert("hai vinto")}
                }

                

            );
            
        };
}
);

console.log(`il tuo punteggio è ${punteggio}`)


// FUNZIONI 

// crea elemento "tag" e aggiungigli una "classe"
function createSquare(tagType , classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}

// crea un array di numeri random che vanno da min a max
function createNumRandomOrderArr (min, max) {

    // creiamo un array interno alla funzione
    const intArr = [];

    // ora dobbiamo popolarlo 
    // finchè la lungheza dell'array è minore al "max" selezionato
    while (intArr.length < max) {
        // crea numero random tra min e numero quadrati
        const nuovoNum = RandomNumMinMax(min, 100);
        // se il numero è presente nell'array non fare nulla
        if(intArr.includes(nuovoNum)){
        // se il numero NON è presente nell'array pushalo dentro 
        } else {
        intArr.push(nuovoNum);
        }
    }
    return intArr;
}

// crea numero random che vada da numMin a numMax
function RandomNumMinMax (numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
 }
