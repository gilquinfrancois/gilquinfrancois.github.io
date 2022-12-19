$(document).ready(function(){

    $(".buttonPlusAp").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Aperitif");
        $('#textDetail').html("<h5>Verrines de cappuccino glacé carottes et cumin</h5><h5>Verrines apéro de velouté d'avocat</h5><h5>Mini-verrines apéritives saumon, crevettes et oeufs de poisson</h5>");
    });

    $(".buttonPlusEF").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Froide");
        $('#textDetail').html("<h5>Foie gras, pains d'épices, framboises et et ces groseilles rouges</h5>");
    });

    
    $(".buttonPlusEC").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Chaude");
        $('#textDetail').html("<h5>Trios de poissons</h5>");
    });

    $(".buttonPlusS").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Soupe");
        $('#textDetail').html("<h5>Soupe de potirons</h5>");
    });

    $(".buttonPlusP").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Plat");
        $('#textDetail').html("<h5>Dinde, sauce chasseur avec ces croquettes de Noel et ca pomme aux airelles</h5>");
    });

    $(".buttonPlusD").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Desert");
        $('#textDetail').html("<h5>Buche à la vanille et pralinée</h5>");
    });

    $("#croix").click(function(){
        $(".detail").animate({height:'0%'},"slow",function(){
            $(this).css("display","none");
            $(".buttonPlus").css("z-index",1);
        });
    });
});