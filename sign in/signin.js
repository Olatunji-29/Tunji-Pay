const signInButton = () => {
    const eMail = document.getElementById('eMail').value.trim()
    const password = document.getElementById('password').value.trim()

    if (eMail === "" || password === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const signInDetails = {
            mail: eMail,
            pass: password,
            loginTime: new Date().toLocaleTimeString()
        }
        const storedUsers = JSON.parse(localStorage.getItem('confirm')) || [];
        const found = storedUsers.find(user => user.mail === signInDetails.mail)

        if (found) {
            const foundUser = storedUsers.find(user => user.mail === signInDetails.mail && user.pass === signInDetails.pass)
            if (foundUser) {
                alert('Logged In Suceesfully')
                // localStorage.setItem('cusMail', JSON.stringify(signInDetails.mail));
                
                window.location.href = '../dashboard/dashboard.html'
            } else {
                showInvalidCredential.style.display = 'block'
            }

        } else {
            showExist.style.display = 'block'
        }

    }
}