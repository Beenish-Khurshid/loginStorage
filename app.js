// Register Function

function Register(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var retypePassword = document.getElementById("retypePassword").value
    var msg = document.getElementById("msg");

    if(password == retypePassword){
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)

        sessionStorage.setItem("name",name)
        sessionStorage.setItem("email",email)
        sessionStorage.setItem("password",password)

        location.assign('login.html')

    }else{
        msg.innerText = "Password And Retype Password Not Match"
    }
}

function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var e_Msg = document.getElementById('e_Msg');
    var p_Msg = document.getElementById('p_Msg');
    var result = document.getElementById('result');

    if(email != "" && password != ""){
        if(email == localStorage.getItem('email') && password == localStorage.getItem('password')){
            location.assign('Dashboard.html');
        }
        else if(email == localStorage.getItem('email') && password != localStorage.getItem('password')){
            p_Msg.innerText = "Password Invalid" 
        }
        else if(email != localStorage.getItem('email') && password == localStorage.getItem('password')){
            e_Msg.innerText = "Email Invalid" 
        }else{
            result.innerText = "BOth Email And Password Not Correct" 
        }

    }else{
        if(email == "" && password == ""){
            result.innerText = "All Fields Required"
        }
        else if(email == "" && password != ""){
            e_Msg.innerText = "Email is Required"
        }
        else if(email != "" && password == ""){
            p_Msg.innerText = "Password is Required"
        }
    }
}