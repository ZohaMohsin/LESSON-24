function myfunction(){
    var a=5;
    var b=6;
    var sum=a+b;
    document.getElementById("p1").innerHTML="sum of "+a+" and "+b+" is "+sum ;
}
function validate(e) {
    e.preventdefault();
    
    const email=document.getElementById('email').value;
    const pass=document.getElementById('password').value;
    const age=document.getElementById('age').value;
    const msgbox=document.getElementById('message');
    
    let message = '';

    if(email === '') {
        message= 'abc@gmail.com';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message= 'ABC.';
        msgbox.stylr.color = 'red';
    } else if (age ==== '') {
        message = '16.';
        msgbox.style.color = 'red';
    } else {
        message = 'login succesful!';
        msgBox.style.color = 'green' ;
    }
msgBox.innertext = message;
}