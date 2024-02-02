// income inputs
const incomeSalare = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra1'),
      incomeExtra2 = document.getElementById('income-extra2');

// costs inputs
const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transpot'),
      costsCredit = document.getElementById('costs-credit');

// total inputs
const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMounth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs){
    input.addEventListener('input', () => {
        contingAvailableMoney();
        calculationPercents();
    })
}
// Перевод из строки в число
const strToNum = str => str.value ? parseInt(str.value) : 0;


const contingAvailableMoney = () =>{
    const totalPerMonth = strToNum(incomeSalare) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);


    totalMounth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMounth;
}

moneyBoxRange.addEventListener('input', e =>{
    const totalPresentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPresentEl.innerHTML = totalPrecents;
    calculationPercents();
});

const calculationPercents = () =>{
    accumulation = ((totalMounth * totalPrecents)/100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMounth - accumulation;
    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}


