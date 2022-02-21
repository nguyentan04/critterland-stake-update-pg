//Main function
var isDebug = true;
var TIME_OUT = 100;

//id 
var ID_MENU_MOBILE = "id_mobile_menu_bar";
var MENU_MOBILE_OPEN = "open";
var MENU_MOBILE_CLOSE = "close";

document.onload = function() {

}

window.onscroll = function() {
    //scroll for menu
    if (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) {
        $('#id_mobile_icon').css('top', '20px');
        $('#id_mobile_open_menu').css('top', '38px');
    } else {
        $('#id_mobile_icon').css('top', '80px'); 
        $('#id_mobile_open_menu').css('top', '98px');
    }  

    //scrol for buttion up
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#btn-up').removeClass('hide');
    } else {
        $('#btn-up').addClass('hide');
    }

    setTimeout(function(){ reveal(); }, TIME_OUT);
    setTimeout(function(){ ctrEffect(); }, TIME_OUT); 
    setTimeout(function(){ roadmapEffect(); }, TIME_OUT);
}

//Main function
$(document).ready(function(){
    try{
        //add function 
        setTimeout(function(){$("#id_mobile_close_menu").click(function(){ replaceClassByIdAndData('id_mobile_close_menu', 'close', 'open');}); }, TIME_OUT);
        setTimeout(function(){$("#id_mobile_open_menu").click(function(){ replaceClassByIdAndData('id_mobile_open_menu', 'open', 'close');}); }, TIME_OUT);
        setTimeout(function(){$(".hide-mobile-menu").click(function(){ hideMenuMobile();}); }, TIME_OUT);
        
        //action ctr info
        setTimeout(function(){ ctrEffect(); }, TIME_OUT);
    }catch(e){
        log(e);
    }
});

/*Function log */
log = function(data) {
    if (isDebug == true) {
        console.log(data);
    }
}

replaceClassByIdAndData = function(id, newClass, oldClass) {
    var id_data = $('#'+id).attr('data');

    $('#'+ id_data).removeClass(oldClass);
    $('#'+ id_data).addClass(newClass);
    log("replaceClassByIdAndData new: "+newClass+" : "+ oldClass);
}

hideMenuMobile = function() {
    $('#'+ ID_MENU_MOBILE).removeClass(MENU_MOBILE_OPEN);
    $('#'+ ID_MENU_MOBILE).addClass(MENU_MOBILE_CLOSE);
    log("hideMenuMobile");
}

hideSlideLeft = function() {
    $('.slide-item').each(function(i){
        $(this).removeClass('hide');

        if (i > 1) {
            $(this).addClass('hide');
        } 
    })
}

hideSlideRight = function() {
    $('.slide-item').each(function(i){
        $(this).removeClass('hide');

        if (i < 2) {
            $(this).addClass('hide');
        } 
    })
}

topFunction = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

reveal = function() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

ctrEffect = function() {
    var reveals = document.querySelectorAll(".ctr");
  
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.remove("inactive");
    }
}

roadmapEffect = function() {
    var reveals = document.querySelectorAll(".roadmapEffect");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  