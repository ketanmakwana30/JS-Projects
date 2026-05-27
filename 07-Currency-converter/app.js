let BASE_URL = "https://api.frankfurter.app/latest"   

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

for (select of dropdowns) {
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD"){
            newOption.selected = "select"
        } else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "select"
        }
        select.append(newOption);
    }

    select.addEventListener("change", (event) => {
        updateFleg(event.target);
    })
}

const updateFleg = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode] ;   
    let newSrc  = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;   
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();

    let amountInput = document.querySelector(".amount input");
    let amount = amountInput.value;

    if (amount === "" || amount < 1 ) {
        amount = 1;
        amountInput.value = "1";
    }

    try{

        const URL = `${BASE_URL}?base=${fromCurr.value}&symbols=${toCurr.value}`;
        let response = await fetch(URL);
        let data = await response.json();
        
        let rate = data.rates[toCurr.value];
        finalAmount = amount * rate;

        msg.innerHTML = `${amount} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`

    } catch(error) {
        msg.innerText = "Something Wrong!"
        console.log(error);
        
    }

    
})

