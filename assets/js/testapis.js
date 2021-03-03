let data;
// this function handles success case
function success(){
    data = JSON.parse(this.responseText);
    
}

setTimeout(function(){console.log(data)}, 500);




// This function hadles error case
function error(err){
    console.log('Request Failed', err); //err details willl be in the err object
}

//xhr request
let xhr = new XMLHttpRequest();
xhr.onload = success; //calls success function, if request is successful
xhr.onerror = error; //calls error function if request fails
xhr.open('GET', 'https://api.github.com/users/nickassafkirk');
xhr.send();

