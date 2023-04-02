const form = document.getElementById("form");
const username = document.getElementById("username");
const intrest = document.getElementById("intrest");
const email = document.getElementById("Email");
const number = document.getElementById("number");

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const intrestValue = intrest.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();

    if(usernameValue === ''){
        setError(username,'Name cannot be blank');
    }
    else{
        setSuccess(username);
    }


    if(emailValue === ''){
        setError(email,'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
    }


    if(numberValue === ''){
        setError(number,'Contact number cannot be empty');
    }
    else if(!isNumber(numberValue)){
        setError(number,'Contact number is invalid');
    }
    else{
        setSuccess(number);
    }


    if(intrestValue === ''){
        setError(intrest,'please select any of the option');
    }
    else{
        setSuccess(intrest);
    }
}
    function isEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ .test(email);
    }
    function isNumber(number){
        return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/ .test(number);
    }
    function setError(input , messsage){
        const formControl =input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ='form-control error';
        small.innerText = messsage;
    }
    function setSuccess(input){
        const formControl =input.parentElement;
        formControl.className ='form-control success';
    }
