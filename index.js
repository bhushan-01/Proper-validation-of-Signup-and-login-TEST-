
const form = document.getElementById('form');
const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const Email = document.getElementById('Email');
const Phonenumber = document.getElementById('Phonenumber');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
//add event
form.addEventListener("submit", (event) => {
    validate();
    console.log(isFormValid());
    if (isFormValid() == true) {
      form.submit();
    } else {
      event.preventDefault();
    }
  });
  
  function isFormValid() {
    const inputContainers = form.querySelectorAll(".form-control");
    let result = true;
    inputContainers.forEach((container) => {
      if (container.classList.contains("error")) {
        result = false;
      }
    });
    return result;
  }


  const isfirstnameval = Firstname =>{
    const re =/^[A-Z][a-z 0-9]+$/
    return re.test(String(Firstname))
    
  }
  const islastnameval = Lastname =>{
    const re =/^[A-Z][a-z 0-9]+$/
    return re.test(String(Lastname))
    
  }
const isemailval= Email =>{
    const re= /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/
    return re.test(String(Email))
}

const isphonenumberval =Phonenumber=>{
    const re =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/

    return re.test((Phonenumber))
}
const ispasswordval = Password=>{
    const re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    return re.test(Password)
}



const validate = () => {
  
    const FirstnameVal = Firstname.value.trim();
    const LastnameVal = Lastname.value.trim();
    const EmailVal = Email.value.trim();
    const PhonenumberVal = Phonenumber.value.trim();
    const PasswordVal = Password.value.trim();
    const ConfirmPasswordVal = ConfirmPassword.value.trim();

  
 //validate firstname
 if (FirstnameVal === "") {
    setErrormsg(Firstname, '-Firstname cannot be blank \n -space are not allowed');
} else if (FirstnameVal.length <= 3) {
    setErrormsg(Firstname, 'Firstname min 4 char');
}else if(!isfirstnameval(FirstnameVal)){
    setErrormsg(Firstname,"-put valid firstname \n -Start letter must be uppercase\n -Must contain lowercase")
} 
else {
    setSuccessMsg(Firstname);
}
//lastname
if (LastnameVal === "") {
    setErrormsg(Lastname, '-Lastname cannot be blank \n -Space are not allowed');
} else if (LastnameVal.length <= 3) {
    setErrormsg(Lastname, '-Lastname min 4 char');
}else if(!islastnameval(LastnameVal)){
    setErrormsg(Lastname,"-Put valid lastname \n -Start letter must be uppercase\n -Must contain lowercase")
} 
else {
    setSuccessMsg(Lastname);
}
//validate mail
if (EmailVal === "") {
    setErrormsg(Email, '-Email cannot be blank \n -Space are not allowed');
} else if (EmailVal.length < 10) {
    setErrormsg(Email, '-Email min 30 char');
}else if(!isemailval(EmailVal))
{
setErrormsg(Email,"-Put a valid mail \n -Please assign the (@ , .)\n -(for ex:xyz@gmail.com/xyz@gmail.co.in)")
} 
else {
    setSuccessMsg(Email);
}


    //validate phone number
    if (PhonenumberVal === "") {
        setErrormsg(Phonenumber, '-Number cannot be blank\n -Space are not allowed');
    } else if (PhonenumberVal.length <= 2) {
        setErrormsg(Phonenumber, '-Not a valid Mobile number');
    }else if(!isphonenumberval(PhonenumberVal)){
        setErrormsg(Phonenumber,"-Put +91 before mobile number \n -Mobile Number must be 10 digits")
    } 
    else {
        setSuccessMsg(Phonenumber);


    }
    //validate password 
 
    if ( PasswordVal=== "") {
        setErrormsg(Password, '-Password cannot be blank\n -Space are not allowed');
    } else if (PasswordVal.length < 8) {
        setErrormsg(Password, '-Minimum 8 char \n -Maximum 16 char');
    }else if(!ispasswordval(PasswordVal))
    {
    setErrormsg(Password,"-Must be 8 to 16 letter\n-Must contain atleast 1 lowercase letter\n-Must contain atleast 1 uppercase letter \n -Must contain atleast 1 Numeric digit \n -Must contain 1 Special character")
    }  
    else {
        setSuccessMsg(Password);

    }


    //validate confirm password 
 
    if ( ConfirmPasswordVal=== "") {
        setErrormsg(ConfirmPassword, '-Password cannot be blank\n -Space are not allowed');
    } else if (ConfirmPasswordVal != PasswordVal ) {
        setErrormsg(ConfirmPassword, 'Password are not  matching');
    } else {
        setSuccessMsg(ConfirmPassword);

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

