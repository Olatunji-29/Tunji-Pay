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
localStorage.setItem('charges', JSON.stringify(charges.textContent))

let tAmount = Number(yourData.howMuch) + Number(charge)
totalAmount.textContent = `₦${tAmount}.00`
localStorage.setItem('total', JSON.stringify(tAmount))


if (yourData.narrate == "") {
    narration.textContent = "No Caption"
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
            let userName = JSON.parse(localStorage.getItem('fullName'))
            let balanceKey = `bal_${userName}`;
            let currentBalance = Number(localStorage.getItem(balanceKey)) || 0
            if (currentBalance < yourData.howMuch) {
                showError2.style.display = 'block'
            }else{
                let newBalance = Number(currentBalance) - Number(yourData.howMuch)
                localStorage.setItem(balanceKey, newBalance)
                window.location.href = '../receipt/receipt.html'
                
            }

        } else {
            alert('noo')
        }

    }
}