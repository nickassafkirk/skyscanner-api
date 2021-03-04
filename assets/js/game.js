
//initiates game start on button press
document.getElementById("startGame").addEventListener("click", startGame);

// initiates game end on button press
document.getElementById('endGame').addEventListener("click", endGame);

//sets tile values and starts timer
function startGame(){
    setTiles();
    startTimer();  
}

// ends the game has function inside which just stops the timer
function endGame(){
    function endTimer(){
        clearInterval(timer);
    }
    endTimer();  
}

//Countdown Timer
let count;

function startTimer(){
   count = 60, timer = setInterval(function() {
       count = count--;
       document.getElementById("timer").firstChild.innerText = count--;

       //end timer when timer reaches -1, This displays 0.
       if(count === -1) {
           clearInterval(timer);
           document.getElementById("timer").firstChild.innerText = "Game Over";
       }
    }, 1000);
}


//global variables
let tiles = document.querySelectorAll(".gametile");
let array = [];
let i = 0;
let clicks;


/*
tiles.addEventListener("click", function(){
        let clicks = 0;
        clicks = clicks++;
        console.log(clicks)
});
*/



//creates an array of 12 random numbers
function setTiles(){  
    while(array.length < 12){
        let randomNum = Math.random();
        randomNum = randomNum * 11;
        randomNum = Math.round(randomNum)+1;

        if(array.includes(randomNum)){
            continue;
        } else {
            array.push(randomNum);     
        }
    }
    console.log(array);
}



tiles.forEach(tile => tile.addEventListener("click", displayTile));


//Show tile values on click

function displayTile(){
    //reveal tile by changing bg color and changing font-size from 0 to 3em;

    this.style.fontSize = "3em"
    this.style.backgroundColor = generateRGBVal();
    this.innerHTML = array[i];
    i++;

    //replace numerical valkues with icon pairs
    if(this.innerHTML < 3){
        this.innerHTML = rocket;
    } else if (this.innerHTML < 5){
        this.innerHTML = `<i class="fas fa-bacterium"></i>`;
    } else if (this.innerHTML < 7){
        this.innerHTML = mountain;
    } else if (this.innerHTML < 9){
        this.innerHTML = football;
    } else if(this.innerHTML < 11){
        this.innerHTML = camera;
    } else if(this.innerHTML < 13){
        this.innerHTML = `<i class="fas fa-kiwi-bird"></i>`;
    } else {
        console.log("Error: too many tiles");
    }
    // this counts number of clicks
    clicks = [i];
}


//icon variables
let football = `<i class="fas fa-football-ball"></i>`;
let mask = `<i class="fas fa-ufo"></i>`;
let camera = `<i class="fas fa-camera-retro"></i>`;
let lightning = `<i class="far fa-bolt"></i>`;
let mountain = `<i class="fas fa-mountain"></i>`;
let rocket =`<i class="fas fa-rocket"></i>`;

//create random RGB Color

let newRGB;

function generateRGBVal() {

    function generateRandomColor() {
        let r = Math.random();
        r = r * 255;
        r = Math.round(r);
        return r;
    }

    let rgbValue = [];
    for (let i = 0; i <= 2; i++) {
        let singleVal = generateRandomColor();
        rgbValue.push(singleVal);
    }
    newRGB = `rgb(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`;
    return newRGB;
}

/* newRGB = generateRGBVal(); */















