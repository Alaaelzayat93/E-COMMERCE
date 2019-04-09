function openmenu(){
  document.getElementById("side-bar").style.display="block";
  document.getElementById("menu-btn").style.display="none";
  document.getElementById("close-btn").style.display="block";
}
function closemenu(){
  document.getElementById("side-bar").style.display="none";
  document.getElementById("menu-btn").style.display="block";
  document.getElementById("close-btn").style.display="none";
}
$(window).scroll(function(){
var navbar = $('.top-nav-bar');
if($(window).scrollTop() >= navbar.height()){
if(!navbar.hasClass('scrolled')){
navbar.addClass('scrolled fixed-top');
} 
}else{
navbar.removeClass('scrolled navbar-fixed-top');
}
});
/*login*/
 
            $.validator.addMethod("EMAIL", function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
            }, "Email Address is invalid: Please enter a valid email address.");

            $.validator.addMethod("PASSWORD",function(value,element){
                return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
            },"Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number.");

            $.validator.addMethod("SUBMIT",function(value,element){
                return this.optional(element) || /[^ ]/i.test(value);
            },"You did not click the submit button.");

            // Validate signup form on keyup and submit
            $("#LOGIN").validate({
                rules: {
                    EMAIL: "required EMAIL",
                    PASSWORD: "required PASSWORD",
                    SUBMIT: "required SUBMIT",
                },
            });
        


