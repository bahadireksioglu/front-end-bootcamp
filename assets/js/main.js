$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.navbar-toggle').click(function(){
        $('.navbar .navbar-menu').toggleClass("active");
        $('.navbar-toggle i').toggleClass("active");
    });
})


