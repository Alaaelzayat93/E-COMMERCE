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
 $("#myModal").validate({
  submitHandler: function(form) {
    // some other code
    // maybe disabling submit button
    // then:
    $(form).submit();
  }
 });


