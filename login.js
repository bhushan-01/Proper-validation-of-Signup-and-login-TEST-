const form = document.getElementById('form');

const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
//event addition
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
// validate function
const validate = () => {
 
    const EmailVal = Email.value.trim();
    const PasswordVal = Password.value.trim();


    const isemailval= Email =>{
        const re= /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/
        return re.test(String(Email))
    }
    const ispasswordval = Password=>{
        const re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        return re.test(Password)
    }
    


    //validate mail
if (EmailVal === "") {
    setErrormsg(Email, '-Email cannot be blank \n -Space are not allowed');
} else if (EmailVal.length <= 10) {
    setErrormsg(Email, '-Email min 10 char'.trim());
}else if(!isemailval(EmailVal))
{
setErrormsg(Email,"-Put a valid mail \n -Please assign the (@ , .)")
} 
else {
    setSuccessMsg(Email);
}

   //validate password 
 
   if ( PasswordVal=== "") {
    setErrormsg(Password, '-Password cannot be blank\n -Space are not allowed');
} else if (PasswordVal.length < 8) {
    setErrormsg(Password, '-Minimum 8 char');
}else if(!ispasswordval(PasswordVal))
{
setErrormsg(Password,"-Must be 8 to 16 letter\n-Must contain atleast 1 lowercase letter\n-Must contain atleast 1 uppercase letter \n -Must contain atleast 1 Numeric digit \n -Must contain 1 Special character")
}  
else {
    setSuccessMsg(Password);

}

function setErrormsg(input, Errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = Errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}
}
// for AvoidSpace
function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
