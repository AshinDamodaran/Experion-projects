function handleSubmit(e){
    e.preventDefault();
    const email = document.forms.login.email;
    const password = document.forms.login.password;

    const emailValue = email.value;
    const passwordValue = password.value;

    if(passwordValue.length < 6){
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
    }
console.log(password);
}