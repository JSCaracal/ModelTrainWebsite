function loginFunction(){
    var uName = document.getElementById("loginName").value;
    var pWord = document.getElementById("pWord").value;
    
    if(pWord == "admin" && uName == "admin"){
        alert("Login Sucess! Redirecting to homepage");
        window.location.href = "index.html";
        return true;
    }else{
        alert("Wrong password or username!");
        
        return false;
    }

}