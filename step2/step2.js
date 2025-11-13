
const prev = JSON.parse(localStorage.getItem('tunji'))
const tunjiConfirm = JSON.parse(localStorage.getItem('tunjiCon')) || []

const signUpButton = () => {

    if (eMail.value.trim() === "" || nin.value.trim() === "" || bvn.value.trim() === "" || phone.value.trim() === "" || pin.value.trim() === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const tunjiConfirmobj = {
            mail: eMail.value,
            ni: nin.value,
            bi: bvn.value,
            pho: phone.value,
            pinn: pin.value
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const validEmail = emailRegex.test(tunjiConfirmobj.mail)
        if (validEmail) {
            const ninRegex = /^[0-9]{11}$/
            const validNin = ninRegex.test(tunjiConfirmobj.ni)
            if(validNin){
                tunjiConfirm.push(tunjiConfirmobj)
                console.log(tunjiConfirm);
            }else{
                showNinValid.style.display = 'block'
            }

        }else{
            showMailError.style.display ='block'
        }
    }
}