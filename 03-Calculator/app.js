let display = document.querySelector('.display');
let btn = document.getElementsByClassName('btn');

function allClear(){
    display.value = "";
    
}

function del(){
    display.value = display.value.slice(0, -1)
}

function addValue(value) {
    display.value += value;
}

function result(value) {
    display.value = eval(display.value);
}

