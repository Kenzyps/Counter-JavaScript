const counterNumber = document.getElementById("number");

let Counter = 0

function counterPlus(){
    Counter +=1;
    updateCounter();
}

function counterMinus(){
    Counter -=1;
    updateCounter();
}

function updateCounter(){
    counterNumber.innerHTML = Counter;
}
