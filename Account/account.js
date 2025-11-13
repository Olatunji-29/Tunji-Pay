const customersName = document.getElementById('customersName');
const customersMail = document.getElementById('show')
const showAcc = document.getElementById('showAcc')


let hisName = JSON.parse(localStorage.getItem('fullName')) ;
let hisGmail = JSON.parse(localStorage.getItem('cusMail'));
let hisFirstLetter = hisName.slice(0, 1)
let hisSecondLetter = hisName[hisName.indexOf(" ") + 1]
let hisFirstTwoLetter = hisFirstLetter + hisSecondLetter
firstTwoLetter.innerHTML = hisFirstTwoLetter
customersName.innerHTML = hisName;
customersMail.innerHTML = hisGmail

let hisAcc = JSON.parse(localStorage.getItem('yourAcc'))
showAcc.innerHTML = hisAcc

let hisBvn = JSON.parse(localStorage.getItem('yourBv')) ;
console.log(hisBvn);

showBvn.innerHTML = hisBvn



