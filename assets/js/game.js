let tiles = document.querySelectorAll(".gametile");

function eachTile(){
    for(tile of tiles){
        let randomNum = Math.random();
        randomNum = randomNum * 5;
        randomNum = Math.round(randomNum)+1;
        console.log(randomNum);
        tile.innerHTML = randomNum;
        tile.style.fontSize = "0px" //number is created but not displayed
    }
}

eachTile()

tiles.forEach(tile => tile.addEventListener("click", displayTile));

function displayTile(){
    this.style.fontSize = "3em"
}







