const submitEmail = document.getElementById('submit-btn')
submitEmail.addEventListener('click', function () {
    const emailField = document.getElementById('exampleInputEmail');
    const userEmail = emailField.value;
    emailField.value = '';
    const passwordField = document.getElementById('exampleInputPassword')
    const userPassword = passwordField.value;

    if (typeof userEmail != 'number' && typeof userPassword != 'string') {
        window.location.href = "bank.html";
    }
    else {
        window.location.href = "bank.html";
    }
});



