
const findAccount = JSON.parse(localStorage.getItem('myConfirm'))
const transfer=()=> {
    const accountNumber = document.getElementById('accountNumber')
    if(bankSelect.value === "" || accountNumber.value.trim() === ""  || amount.value.trim() === "" ){
        showError.style.display = 'block'
    }else if(accountNumber.value.trim().length !== 10  ){
        showAccountError.style.display = 'block'
    }else if(amount.value.trim() < 50){
        showAmountError.style.display = 'block'
    }else{
        showError.style.display = 'none'
        const transferObj = {
            bankName: bankSelect.value,
            accNum: accountNumber.value,
            accName: accountName.value,
            howMuch: amount.value
        }
        const fullPhone = '0' + accountNumber.value
        const foundAccount = findAccount.find(user=> user.pho === fullPhone )
        if (foundAccount) {
            accountName.innerHTML = findAccount.mail
            
        }else{
            alert('Nooo')
        }
        

    }

}



