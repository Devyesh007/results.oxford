function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    if(
        email === "devyeshvats@ox.ac.uk" &&
        password === "9697670007"
    ){

        window.location.href =
            "otp.html";

    }
    else{

        alert("Invalid credentials");

    }

}

function verifyOTP(){

    const otp =
        document.getElementById("otp").value;

    if(otp === "7077"){

        window.location.href =
            "results.html";

    }
    else{

        alert("Invalid OTP");

    }

}
