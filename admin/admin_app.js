add_account_form.addEventListener("submit", (e) => {
    auth.onAuthStateChanged(user => {
        if(user.uid == 'Sa1vNQSbF1fOt5QK5OWYaAAETvr1'){
            // console.log(user)
            e.preventDefault();

            // get user info
            const email = add_account_form['schoolemail'].value;
            const password = add_account_form['schoolpassword'].value;
        
            // sign up the user
    
            authWorkerAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
                add_account_form.reset();

                //  const modal = document.querySelector('#modal-signup')
                // console.log(cred.user)
                // console.log(error.code)
                // console.log(error.message)
                authorize.innerHTML = ''
                main.style.display = "block"
                // $('#successModal').modal('show')
            
        
            }).then((cred) => {
             
                add_account_form.querySelector('.error').innerHTML = '';
                return db.collection('SchoolInfo').doc(cred.user.uid).set({
                    school_email: add_account_form['schoolemail'].value,
                    school_name: add_account_form['Schoolname'].value,
                    school_address: add_account_form['Schooladdress'].value,
                    school_contact_person: add_account_form['Schoolcontactperson'].value,
                    school_contact_number: add_account_form['Schoolcontactnumber'].value

                    
                });

            }).catch(err => {
                add_account_form.querySelector('.error').innerHTML = err.message;
            }).then(() => {
                $('#successModal').modal('show')
                add_account_form.reset();

            })

        }else{
            authorize.innerHTML = 'Not Authorize'
        }
    });
    

});
