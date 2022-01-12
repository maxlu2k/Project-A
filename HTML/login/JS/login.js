// $("#login-button").click(function(event) {
//     event.preventDefault();
//     $('form').fadeOut(500);
//     $('.wrapper').addClass('form-success');
// });
var form = document.getElementById("form").value;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == " admin123") {
        alert("login successfully");
        return false;
    } else {
        alert("login fail");
    }
}