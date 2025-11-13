const customersName = document.getElementById('customersName');
const customersMail = document.getElementById('customersMail')

let hisName = JSON.parse(localStorage.getItem('userName')) ;
let hisGmail = JSON.parse(localStorage.getItem('gMail'));
let hisFirstLetter = hisName.slice(0, 1)
let hisSecondLetter = hisName[hisName.indexOf(" ") + 1]
let hisFirstTwoLetter = hisFirstLetter + hisSecondLetter
firstTwoLetter.innerHTML = hisFirstTwoLetter
customersName.innerHTML = hisName;
customersMail.innerText = hisGmail