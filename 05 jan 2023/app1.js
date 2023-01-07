function  handleSubmit(e){
    e.preventDefault();
    console.log(e);
    const email = document.forms.login.email.value;
    const password = document.forms.login.password.value;
    console.log(email, password);
}