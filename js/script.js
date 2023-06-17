/* Counter JavaScript */
let ris = ""
let count = 0;
const cDisplay = document.querySelector(".display");
const btnMore = document.querySelector(".btnmore");
const btnLess = document.querySelector(".btnless");
const tacca = document.querySelectorAll(".tacca span");
let num_tacche = 0;


function setMinmax(){
    let x, y;
    x = prompt("Inserisci minimo:");
    y = prompt("Inserisci massimo:");
    return [x,y]
}

let minmax = setMinmax();



const valTacca = minmax[1] / 9;

if (minmax[0] == 0) {
  btnLess.classList.add("disabled");
}
cDisplay.innerText = count;

n = 0;

function colorTacca(value, sig, valTacca, numTacche) {
  ris = value / valTacca;
  if (sig == "+") {
    
    
    let x = 0
    for (let i = 0; i < ris; i++) {
      tacca[i].classList.add("full");
      
      x++
    }
    return x
  }
  if (sig == "-") {
    
    for (let i = numTacche -1; i >= ris; i--) {
      try {
        tacca[parseInt(i)].classList.remove("full");
      } catch (err) {
        console.log("Error: " + err);
      }
    }
  }

  

  
}

// Eventi click bottoni

btnMore.addEventListener("click", () => {
  if (count >= minmax[1]) {
  } else {
    count++;
    cDisplay.innerText = count;
    num_tacche = colorTacca(count, "+", valTacca, num_tacche);
    if (count == minmax[1]) {
      btnMore.classList.add("disabled");
    }
    if (count >= minmax[0]) {
      btnLess.classList.remove("disabled");
    }
  }
});

btnLess.addEventListener("click", () => {
  if (count <= minmax[0]) {
    
  } else {
    count--;
    cDisplay.innerText = count;
    colorTacca(count, "-", valTacca, num_tacche);

    if (count == minmax[0]) {
      btnLess.classList.add("disabled");
    }
    if (count < minmax[1]) {
      btnMore.classList.remove("disabled");
    }
  }
});
