
const authorize = document.querySelector('#authorize')
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedInLinksAdmin = document.querySelectorAll('.logged-in-admin');
const accountDetails = document.querySelector('.account');
const email_span = document.querySelector('#email_span');
const loginmodal = document.querySelector('#loginmodal')
const main = document.querySelector('.main_content')

const setupUi = (user) => {
    if(user){
        //account info
        const html = `
            <div>${user.email}</div>
        `;
        email_span.innerHTML = html;

        //toggle ui elements
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedInLinks.forEach(item => item.style.display = "flex");
        loggedOutLinks.forEach(item => item.style.display = "none");
        
        const success = document.querySelector('#success')
        loginmodal.classList.add('active')

        if(user.uid == 'Sa1vNQSbF1fOt5QK5OWYaAAETvr1'){
            loggedInLinksAdmin.forEach(item => item.style.display = "block");
            main.style.display = "block"
        }else{
            loggedInLinksAdmin.forEach(item => item.style.display = "none");
            main.style.display = "none"
        }
        // http://127.0.0.1:5500/admin/admin_Accounts.html


    }else{


        //hide acc info 
        main.style.display = "none"
        email_span.innerHTML = '';
        loginmodal.classList.remove('active')
        //toggle ui elements
        loggedInLinksAdmin.forEach(item => item.style.display = "none");
        loggedInLinks.forEach(item => item.style.display = "none");
        loggedOutLinks.forEach(item => item.style.display = "block");
    }



}


auth.onAuthStateChanged(user => {
    setupUi(user)
});

const add_account_form = document.querySelector("#add_account_form");

let authWorkerApp = firebase.initializeApp(firebase.app().options, 'auth-worker');
let authWorkerAuth = firebase.auth(authWorkerApp);
authWorkerAuth.setPersistence(firebase.auth.Auth.Persistence.NONE); // disables caching of account credentials



