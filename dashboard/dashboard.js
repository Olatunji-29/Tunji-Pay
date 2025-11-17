let newBal = JSON.parse(localStorage.getItem('new'))

const realUserName = document.getElementById('realUserName')
const personalName = document.getElementById('personalName')
const firstLetter = document.getElementById('firstLetter')


let hisName = JSON.parse(localStorage.getItem('fullName')) ;
realUserName.innerHTML = hisName;
personalName.innerHTML = hisName

let myFirst = hisName.slice(0, 1).toUpperCase()
firstLetter.innerHTML = myFirst



let hisBalance = localStorage.getItem('bal') 
if(!hisBalance){
    let max = 5000000
    let min = 100000
    let balance = (Math.random() * (max - min + 1) + min).toFixed(2)
    localStorage.setItem('bal', balance)
}else{
    balance = hisBalance
}

availableBalance.innerHTML = `₦ ${newBal ??  balance}`.toFixed(2)
totalBalance.innerHTML = `₦ ${newBal ??  balance}`.toFixed(2)
