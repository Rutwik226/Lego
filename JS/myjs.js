window.onload = function(){
    window.onscroll = function(){
        if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200){
            document.getElementsByClassName("nav-main")[0].classList.add("hide");
            document.getElementsByClassName("navbar")[0].classList.add("b-white");
        }
        else{
            document.getElementsByClassName("nav-main")[0].classList.remove("hide");
            document.getElementsByClassName("navbar")[0].classList.remove("b-white");
        }
    }
}