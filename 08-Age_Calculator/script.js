const btnEl = document.querySelector("#btn");
const birthdayEl = document.querySelector("#birthday");
const resultEl = document.querySelector("#result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("Please Enter the Birthday")
    }else {
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `You are ${age} ${age > 1 ? "Year" : "year"} old`
    }
}

function getAge(birthdayValue) {
    const currentData = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentData.getFullYear() - birthdayDate.getFullYear();
    let month = currentData.getMonth() - birthdayDate.getMonth();

    if( month < 0 || (month === 0 && currentData.getDate() < birthdayDate.getDate() ) ){
        age--;
    }
    return age;
}


btnEl.addEventListener("click", calculateAge);