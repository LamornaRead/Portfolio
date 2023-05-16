function validateForm() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstName.length == 0) {
        let fnameError = document.getElementById('firstname-error');
        fnameError.innerHTML = 'Please Enter First Name';
        return false;
    }
    if(lastName.length == 0) {
        let lnameError = document.getElementById('lastname-error');
        lnameError.innerHTML = 'Please Enter Last Name'
        return false;
    }
    if(!emailFormat.test(email) || email.length == 0) {
        let emailError = document.getElementById('email-error');
        emailError.innerHTML = 'Please Enter A Valid Email';
        return false;
    }
    if(subject.length == 0) {
        let subjectError = document.getElementById('subject-error');
        subjectError.innerHTML = 'Please Enter A Subject';
        return false;
    }
    if(message.length <= 140) {
        let messageError = document.getElementById('message-error');
        messageError.innerHTML = 'Your Message Is Too Short';
        return false;
    }
    alert("Contact Form Submitted.");
    return true;
}