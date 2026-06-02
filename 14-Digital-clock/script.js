const hourEl = document.getElementById('hours')
const minuteEl = document.getElementById('minutes')
const secondEl = document.getElementById('seconds')
const sessionEl = document.getElementById('session')
const dateEl = document.getElementById('date')
const monthEl = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

setInterval(() => {
  const date = new Date();
  let code = `${date.getDate()} ${monthEl[date.getMonth()]} ${date.getFullYear()}`;
  dateEl.textContent = code;


  let nowSeconds = date.getSeconds();
  let nowMinutes = date.getMinutes();
  let nowHours = date.getHours();

  if(nowHours > 12){
    sessionEl.textContent = `PM`;
    nowHours -= 12;
  } else {
    sessionEl.textContent = `AM`;
  }

  if(nowHours < 10){
    hourEl.textContent = `0 ${nowHours}`
  } else {
    hourEl.textContent = nowHours;
  }

  if(nowMinutes < 10){
    minuteEl.textContent = `0 ${nowMinutes}`
  } else {
    minuteEl.textContent = nowMinutes;
  }

  if(nowSeconds < 10){
    secondEl.textContent = `0 ${nowSeconds}`
  } else {
    secondEl.textContent = nowSeconds;
  }
},1000)