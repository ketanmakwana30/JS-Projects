let inputEl = document.querySelector("#date");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

inputEl.max = new Date().toISOString().split('T')[0];


function calculateAge() {
    let birthDate = new Date(inputEl.value);

    let day = birthDate.getDate();
    let month = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear();

    let today = new Date();

    let nowDay = today.getDate();
    let nowMonth = today.getMonth() + 1;
    let nowYear = today.getFullYear();

    let difDay, difMonth, difYear;

    difYear = nowYear - year;

    if (nowMonth >= month) {
        difMonth = nowMonth - month;
    } else {
        difYear--;
        difMonth = 12 + nowMonth - month;
    }

    if (nowDay >= day) {
        difDay = nowDay - day;
    } else {
        difMonth--;
        difDay = getDayInMonth(year, month) + nowDay - day;
    }

    if (difMonth < 0) {
        difMonth = 11;
        difYear--;
    }
    result.innerHTML = ` You are ${difYear} Year , ${difMonth} Month and ${difDay} Day Old`
}

function getDayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", calculateAge);