//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    // e.preventDefault();
    auth.signOut();
    // console.log('logged out')
})


// login\
const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    loginForm.querySelector('.error').innerHTML = '';
    auth.signInWithEmailAndPassword(email, password).then(cred => {
    //    localStorage.setItem('email', JSON.stringify(email))
        console.log('login succsesss')
        $('#loginmodal').modal('hide')
       loginForm.querySelector('.error').innerHTML = '';

    }).then(() => {

        $('#loginmodal').modal('hide')
        loginForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message;
    })

})