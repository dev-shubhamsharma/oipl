function validateUser() {

    var username = document.getElementById("username").value.trim()
    var password = document.getElementById("password").value.trim()

    const arr = username.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    username = arr.join(" ");

    password = password.charAt(0).toUpperCase() + password.slice(1);
    console.log(username)
    console.log(password)

    // console.log(name)
    // console.log(password)
    if(password == students[username]) {
        // alert("matched")
        document.getElementsByClassName("preloader")[0].style.display = "flex"
        window.localStorage.setItem("username",username);
        window.localStorage.setItem("password",password);

        const timeout = setTimeout(function() {
            window.open("examwindow.html","_self")
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