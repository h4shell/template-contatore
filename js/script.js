/* Counter JavaScript */
let ris = ""
let count = 0;
const cDisplay = document.querySelector(".display");
const btnMore = document.querySelector(".btnmore");
const btnLess = document.querySelector(".btnless");
const tacca = document.querySelectorAll(".tacca span");
let num_tacche = 0;
let minmax = [0, 0]
let check = 0


function setMinmax(){
    let x, y;
    x = 0
    y = prompt("Inserisci un numero da [1 a ∞]:");
  
    while (Number.isInteger(parseInt(y)) & parseInt(y) >= 1){
        return [x,y]
    }
    return [0, 0]
  }
  
    
while (check == 0){
  if (minmax[1] > 1){
    check = 1
    
  } else {
    minmax = setMinmax()
    
  }
  
  
}
  console.log(minmax)


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
