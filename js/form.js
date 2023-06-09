// character counter vars 
let textArea = document.getElementById('message');
let characterCounter = document.getElementById('char-count');

//counter function 

const countCharacters = () => {
    let numberOfEnteredChars = textArea.value.length;
    let counter = numberOfEnteredChars;
    if(numberOfEnteredChars <= 140) {
        characterCounter.textContent = counter + '/140';
        characterCounter.style.color = 'red';
    } else {
        characterCounter.textContent = counter + '/140';
        characterCounter.style.color = '#24d36e';
    }
    (this).addEventListener("submit", function(){
        characterCounter.textContent = '';
    });
};

textArea.addEventListener("input", countCharacters);

// form function vars


// const firstName = document.getElementById('fname').value;
// const lastName = document.getElementById('lname').value;
// const email = document.getElementById('email').value;
// const subject = document.getElementById('subject').value;
// const message = document.getElementById('message');
// const success = document.getElementById('success');
// const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const messageErr = document.getElementById('messageErr');



function validateForm() {
    var fields = new Array(); 
    var fields = [document.getElementById('fname'), 
                    document.getElementById('lname'),
                    document.getElementById('email'),
                    document.getElementById('subject'),
                    document.getElementById('message')
                    ];
    var errMessage = new Array();
    var errMessage = [document.getElementById('fnameErr'),
                        document.getElementById('lnameErr'), 
                        document.getElementById('emailErr'), 
                        document.getElementById('subjectErr'),
                        document.getElementById('messageErr')
                    ];
    var err = 0;
    for (var i = 0; i < fields.length; i++) {
        if(fields[i].value == "") {
            err++
            fields[i].style.border = '1px solid red';
            fields[i].style.boxShadow = '0 0 20px red';
            errMessage[i].innerHTML = `Please fill in ${fields[i].name}`;
        } else {
            fields[i].style.boxShadow = '';
            fields[i].style.border = '';
            errMessage[i].innerHTML = '';
        }
    }


    if (err === 0) {
        success.innerHTML = 'Submit Successful';
        success.style.color = '#24d36e';
        console.log('form success');
    } else {
        success.innerHTML = 'Fill Out Form Correctly';
        success.style.color = 'red';
        console.log('form failed');
        return false;
    }

    document.addEventListener('submit', function(event) {
        event.preventDefault();
        event.target.reset();
    });
    return true;
}


// kept for reference not in use //////////////////////////////////////////////////////////////////////////////////////////////


// function checkMessage() {    
//     if(message.value.length <= 140) {
//         console.log('message false');
//         message.style.boxShadow = '0 0 20px red';
//         message.style.border = '1px solid red';
//         messageErr.innerHTML = `Please fill in ${message.name}`;
//     return false
//     }
//     if(message.value.length > 140) {
//             message.style.boxShadow = '';
//             message.style.border = '';
//             messageErr.innerHTML = '';
//             console.log('message true');
//     }
// }

// //form function to check one at a time

// function validateForm() {
//     //first name
//     if(firstName.length == 0) {
//         let fnameError = document.getElementById('firstname-error');
//         fnameError.innerHTML = 'Please Enter First Name';
//         return false;
//     } 
//     if(firstName.length > 0) {
//         let fnameError = document.getElementById('firstname-error');
//         fnameError.innerHTML = '';
//     }
//     //last name
//     if(lastName.length == 0) {
//         let lnameError = document.getElementById('lastname-error');
//         lnameError.innerHTML = 'Please Enter Last Name';
//         return false;
//     }
//     if(lastName.length > 0) {
//         let fnameError = document.getElementById('lastname-error');
//         fnameError.innerHTML = '';
//     }
//     //email
//     if(!emailFormat.test(email) || email.length == 0) {
//         let emailError = document.getElementById('email-error');
//         emailError.innerHTML = 'Please Enter A Valid Email';
//         return false;
//     }
//     if(emailFormat.test(email) || email.length > 0) {
//         let emailError = document.getElementById('email-error');
//         emailError.innerHTML = '';
//     }
//     //subject
//     if(subject.length == 0) {
//         let subjectError = document.getElementById('subject-error');
//         subjectError.innerHTML = 'Please Enter A Subject';
//         return false;
//     }
//     if(subject.length > 0) {
//         let subjectError = document.getElementById('subject-error');
//         subjectError.innerHTML = '';
//     }
//     //message
//     if(message.length <= 140) {
//         let messageError = document.getElementById('message-error');
//         messageError.innerHTML = 'Your Message Is Too Short';
//         return false;
//     }
//     if(message.length > 140) {
//         let messageError = document.getElementById('message-error');
//         messageError.innerHTML = '';
//     }
//     success.innerHTML = 'Submit Successful';
//     success.style.color = '#24d36e';
//     document.addEventListener('submit', function(event) {
//         event.preventDefault();
//         event.target.reset();
//     });    
//     return true;   
// }