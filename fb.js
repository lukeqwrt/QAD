
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedInLinksAdmin = document.querySelectorAll('.logged-in-admin');
const accountDetails = document.querySelector('.account');
const loginmodal = document.querySelector('#loginmodal')

const setupUi = (user) => {
    if(user){
        //account info
        const html = `
            <div class="px-3">${user.email}</div>
        `;
        accountDetails.innerHTML = html;

        //toggle ui elements
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedInLinks.forEach(item => item.style.display = "flex");
        loggedOutLinks.forEach(item => item.style.display = "none");
        
        const success = document.querySelector('#success')
        loginmodal.classList.add('active')

        if(user.uid == 'Sa1vNQSbF1fOt5QK5OWYaAAETvr1'){
            loggedInLinksAdmin.forEach(item => item.style.display = "block");
        }else{
            loggedInLinksAdmin.forEach(item => item.style.display = "none");
        }

    }else{
        //hide acc info 
        accountDetails.innerHTML = '';
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

var timeDisplay = document.getElementById("time");

function refreshTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //array of days
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] //array of months
var date = new Date(); //creating Date object
var currentDay = days[date.getDay()]; //determining day using the array and method 
var currentMonth = months[date.getMonth()]; //determining month using the array and method
var currentDate = date.getDate(); //current date
var currentYear = date.getFullYear(); //current year
// document.getElementById('date').innerHTML = "Current Date: " + currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear + "</br";
// console.log(currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear)
    // document.getElementById("demo").innerHTML = day;
    // var dateString = new Date()
  var dateString = new Date().toTimeString("en-PH", {timeZone: "Asia/Manila" });
  var formattedString = dateString.replace(" ", " ");
//   timeDisplay.innerHTML = currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear + " - " + formattedString;


var dateString = new Date (). toTimeString("eb-Ph", {timeZone: "Asia/Manila"}) ; 

}

setInterval(refreshTime, 1000);
