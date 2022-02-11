const submitEmail = document.getElementById('submit-btn')
submitEmail.addEventListener('click', function () {
    const emailField = document.getElementById('exampleInputEmail');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('exampleInputPassword')
    const userPassword = passwordField.value;

    if (userEmail == 'muzahid' && userPassword == 1234) {
        window.location.href = "bank.html";
    }
    else {
        document.body.style.backgroundColor = ('red')
    }
});



