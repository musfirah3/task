function login(e){
    e.preventDefault()
    alert("Your form is successfully submitted")
    var userName=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var result=userName+password;
    console.log(result)
}