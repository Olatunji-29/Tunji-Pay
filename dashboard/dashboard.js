const realUserName = document.getElementById('realUserName')
const personalName = document.getElementById('personalName')
const firstLetter = document.getElementById('firstLetter')


let hisName = JSON.parse(localStorage.getItem('userName')) ;
realUserName.innerHTML = hisName;
personalName.innerHTML = hisName
let myFirst = hisName.slice(0, 1)
firstLetter.innerHTML = myFirst
