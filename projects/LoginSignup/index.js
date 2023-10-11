$("#signup").hide();

$(document).ready(function(){
    $("#sign-up-click").click(function(){
        $("#login").slideToggle();
        $("#signup").delay(500).slideDown();
        // $("#signup").slideDown();
    })
    $("#login-click").click(function(){
        $("#signup").slideToggle();
        $("#login").delay(500).slideDown();
        // $("#signup").slideDown();
    })
})