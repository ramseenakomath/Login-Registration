function registerData(){

    var name=document.getElementById("text").value;
    console.log(name); 
    var a=document.getElementById("text1").value;
    console.log(a);
    var b=document.getElementById("text2").value;
    console.log(b);
}
function logData(){
    var email=document.getElementById("texta").value;
    console.log(email); 
    var pw=document.getElementById("textb").value;
    console.log(pw);

    registerData();

    if(email==a && pw==b){
        alert("Login Successfully ");
    }
    else{
        alert("Invalid Email or Password.Please try again.");
    }
}