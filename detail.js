$(document).ready(function(){

    $(".buttonPlusEF").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Froide");
        $('#textDetail').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id cumque nemo ratione veniam possimus explicabo ullam tenetur enim voluptas sunt at, odit officiis non in animi esse ipsum eius.");
    });

    
    $(".buttonPlusEC").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Chaude");
        $('#textDetail').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id cumque nemo ratione veniam possimus explicabo ullam tenetur enim voluptas sunt at, odit officiis non in animi esse ipsum eius.");
    });

    $(".buttonPlusS").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Soupe");
        $('#textDetail').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id cumque nemo ratione veniam possimus explicabo ullam tenetur enim voluptas sunt at, odit officiis non in animi esse ipsum eius.");
    });

    $(".buttonPlusP").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Plat");
        $('#textDetail').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id cumque nemo ratione veniam possimus explicabo ullam tenetur enim voluptas sunt at, odit officiis non in animi esse ipsum eius.");
    });

    $(".buttonPlusD").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Desert");
        $('#textDetail').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id cumque nemo ratione veniam possimus explicabo ullam tenetur enim voluptas sunt at, odit officiis non in animi esse ipsum eius.");
    });

    $("#croix").click(function(){
        $(".detail").animate({height:'0%'},"slow",function(){
            $(this).css("display","none");
            $(".buttonPlus").css("z-index",1);
        });
    });
});