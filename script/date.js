let today = new Date();

let dayName = today.toLocaleString("en-US", { weekday: "long" });
let monthName = today.toLocaleString("en-US", { month: "long" });
let day = today.getDate();
let year = today.getFullYear();



const date = document.getElementById('date')

const p = document.createElement('p')
p.innerHTML = `${dayName}, <br><p class ="font-bold">${monthName} ${year}</p>`
// p1.innerText = `${dayName}`
// const p2 = document.createElement('p')
// p2.innerText = `${monthName}`
// const p3 = document.createElement('p')
// p3.innerText = `${year}`
// date.appendChild(p1)
// date.appendChild(p2)
date.appendChild(p)

const timeCards = document.querySelectorAll('.time-card')
for(const timeCard of timeCards){
    timeCard.innerHTML = `${day} ${monthName} ${year}`

}