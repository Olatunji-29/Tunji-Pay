let yourData = JSON.parse(localStorage.getItem('info'))
let toKnowPin = JSON.parse(localStorage.getItem('myConfirm'))


amount.textContent = `₦${yourData.howMuch}.00`

if (yourData.howMuch <= 5000) {
    charge = 5
} else if (yourData.howMuch > 5000 && yourData.howMuch < 10000) {
    charge = 10
} else {
    charge = 15
}
charges.textContent = `₦${charge}`

let tAmount = Number(yourData.howMuch) + Number(charge)
totalAmount.textContent = `₦${tAmount}.00`


if (yourData.narrate == "") {
    narration.textContent = "Nothing"
} else {
    narration.textContent = yourData.narrate
}

rName.textContent = yourData.accName

rAccountNumber.textContent = yourData.accNum

rBank.textContent = yourData.bankName

console.log(yourData);


const toComplete = () => {
    if (transactionPin.value === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const matchPin = toKnowPin.find(user => user.pinn == transactionPin.value)
        if (matchPin) {

            let ball = JSON.parse(localStorage.getItem('bal'))
            if (ball < yourData.howMuch) {
                showError2.style.display = 'block'
            }else{
                window.location.href = '../receipt/receipt.html'
                let newbal = Number(ball) - Number(yourData.howMuch)
                localStorage.setItem('new', JSON.stringify(newbal))

            }

        } else {
            alert('noo')
        }

    }
}