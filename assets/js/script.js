function scannerApi(){
    
    let skyScanDiv = document.getElementById("skyscannerAPI");

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let results = this.responseText;
        console.log(results);
		skyScanDiv.innerHtml = `${results}`;
	}
});

xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IE/euro/en-IE/?query=Stockholm");
xhr.setRequestHeader("x-rapidapi-key", "bf7e0456ccmshd4146dcf1052ed1p1fac35jsnc7a13e0716e4");
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");

xhr.send(data);

};


document.getElementById("start")

document.getElementById("timer");

function countDown(time){
    while(time > 0){
        console.log(time--);
    }
}

function numbersList(){
let parentDoc = document.getElementById("printNums");
let newList = document.createElement("ul");
insertList = parentDoc.append(newList);
let newLi;
  for( let i = 0; i < 10; i++){
    if(i % 2 != 0){
        continue;
    } else {
        newLi = document.createElement("li");
        newLi.innerText = i;
        newList.append(newLi); 
        newList.style.textAlign = "left";
    }
  }
}

numbersList();

function createTable(){

    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        let cell;
        for (var b = 0; b < 10; b++) {
            cell = document.createElement("td");
            cell.innerText = "new cell";
            row.appendChild(cell);
            cell.style.backgroundColor = "black";
            cell.style.border = "1px solid white";
            cell.style.padding = "15px";
            cell.style.color = "white";
        }
        row.style.borderBottom = "5px solid black";
        let table = document.body.appendChild(document.createElement("table"));
        table.appendChild(row);
        table.style.margin = "0 auto";
        let rows = document.getElementsByTagName("tr");
    } 
}


let tableButton = document.createElement("button");
tableButton.innerHTML = "Create Table";
tableButton.classList.add("tableButton")
document.body.appendChild(tableButton);

document.querySelector(".tableButton").addEventListener("click", createTable);


function iterateString (){
    let string = "string"
    for(let i = 0; i < string.length; i++){
        console.log(string[i]);
    }
}

let object = { "name" : "Nick", "Age" : 29, "Profession" : "Player"};

for (key in object){
    console.log(key);
}

let fruits = ["apple","orange","pear"];

//for of prints the value of each array item
for ( fruit of fruits ){
    console.log(fruit);
}

//for in prints index of each array item
for ( fruit in fruits ){
    console.log(fruits[fruit]);
}


