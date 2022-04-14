var code1 = document.getElementById("password1");

var eye = document.getElementById("eye");
var monkey = document.getElementById("monkey");

function myFunction1() {
    if (code1.type === "password", eye.className === "eyeIcon", monkey.className === "monkey") {
        code1.type = "text";
        eye.className = "eyeIcon1"
        monkey.className = "monkeyOn"
    } else {
        code1.type = "password"
        eye.className = "eyeIcon"
        monkey.className = "monkey"
    }
}