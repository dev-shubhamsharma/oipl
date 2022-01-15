function validateUser() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    // console.log(name)
    // console.log(password)
    if(password == students[username]) {
        // alert("matched")
        document.getElementsByClassName("preloader")[0].style.display = "flex"
        window.localStorage.setItem("username",username);
        window.localStorage.setItem("password",password);

        const timeout = setTimeout(function() {
            window.open("ExamWindow.html","_self")
            clearTimeout(timeout)
        },5000)
    }
    else {
        // alert("not matched")
        document.getElementById("msg").style.display = "block"
    }
    
}

function clearLoginMsg() {
    document.getElementById("msg").style.display = "none"
}