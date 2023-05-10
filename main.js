// creazione variabile container generale dove inserire contenitore griglia
const centerContainer = document.getElementById("centerContainer");

// creazione bottone
const buttonPlay = document.getElementById("buttonPlay");

// quando clicco bottone:
buttonPlay.addEventListener("click",
    function() {

        // crea contenitore griglia
        const squaresContainer = document.createElement("div");
        squaresContainer.classList.add("squaresContainer");
        centerContainer.append(squaresContainer);
        
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
                    // diventa blu quando lo clicco
                square.classList.add("blue")
                // stampo in console quadrato cliccato
                console.log(square.innerHTML)
                }
            );
            
        };


    }
);


// FUNZIONI 
function createSquare(tagType , classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}