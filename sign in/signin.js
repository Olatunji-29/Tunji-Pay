const signInButton=()=>{
    const eMail = document.getElementById('eMail').value.trim()
    const password = document.getElementById('password').value.trim()

    if (eMail === "" || password === "") {
        showError.style.display = 'block'
    }else{
        showError.style.display = 'none'
        const storedUsers = JSON.parse(localStorage.getItem('tunji')) || [];

        const foundUser = storedUsers.find(user=> user.mail === eMail && user.pin === password)

        if(foundUser){
            alert('Logged In Suceesfully')
            window.location.href = '../dashboard/dashboard.html'
        }else{
            showInvalidCredential.style.display = 'block'
        }

    }
}