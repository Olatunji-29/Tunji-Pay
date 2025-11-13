let tunjiUsers = []
if (localStorage.tunji) {
    const stored = JSON.parse(localStorage.getItem('tunji'))
    tunjiUsers = stored
} else {
    tunjiUsers = []
}


const signUpButton = () => {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const userPassword = document.getElementById('userPassword')
    const userConfirmPassword = document.getElementById('userConfirmPassword')
    const showError = document.getElementById('showError')





    if (firstName.value.trim() === "" || lastName.value.trim() === "" || dob.value.trim() === "" || gender.value.trim() === "" || country.value.trim() === "" || userPassword.value.trim() === "" || userConfirmPassword.value.trim() === "") {
        showError.style.display = 'block'


    } else {
        showError.style.display = 'none'
        const tunjiUsersObj = {
            f_name: firstName.value,
            l_name: lastName.value,
            ofBrith: dob.value,
            gen: gender.value,
            count: country.value,
            pin: userPassword.value,
            c_pin: userConfirmPassword.value
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        const validPassword = passwordRegex.test(tunjiUsersObj.pin)
        if (validPassword) {
            if (tunjiUsersObj.pin === tunjiUsersObj.c_pin) {
                const yearOfBirth = new Date(tunjiUsersObj.ofBrith).getFullYear();
                const currentYear = new Date().getFullYear();
                if(currentYear - yearOfBirth >=18){
                    if((tunjiUsersObj.f_name).length > 1 && (tunjiUsersObj.l_name).length > 1  ){
                        tunjiUsers.push(tunjiUsersObj)
                       

                        window.location.href = '../step2/step2.html'
                    }else{
                        showNameError.style.display = 'block'
                    }
                }else{
                    showBirthError.style.display = 'block'
                }
                
            } else {
                showPinConfirmation.style.display = 'block'
            }

        } else {
            showPasswordError.style.display = 'block'
        }


    }
}