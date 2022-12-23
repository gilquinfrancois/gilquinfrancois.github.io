$(document).ready(function(){

    $(".buttonPlusAp").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Aperitif");
        $('#textDetail').html("<h5>Verrines de cappuccino glacé carottes et cumin.</h5><h5>Verrines de velouté d'avocat et de crabe.</h5><h5>Verrines au saumon, crevettes et oeufs de saumon.</h5>");
    });

    $(".buttonPlusEF").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Froide");
        $('#textDetail').html("<h5>Foie gras et ses accompagnements.</h5>");
    });

    
    $(".buttonPlusEC").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Entree Chaude");
        $('#textDetail').html("<h5>Trios de poissons accompagnés de sa sauce bisque.</h5>");
    });

    $(".buttonPlusS").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Soupe");
        $('#textDetail').html("<h5>Velouté de potiron.</h5>");
    });

    $(".buttonPlusP").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Plat");
        $('#textDetail').html("<h5>Dinde avec ses croquettes de Noël, ses pommes aux airelles et sa sauce chasseur.</h5>");
    });

    $(".buttonPlusD").click(function(){
        $(".detail").css("display","block");
        $(".detail").animate({height:'60%'},"slow");
        $(".buttonPlus").css("z-index",0);
        $('#titreDetail').text("Desert");
        $('#textDetail').html("<h5>Bûche à la vanille et bûche pralinée.</h5>");
    });

    $("#croix").click(function(){
        $(".detail").animate({height:'0%'},"slow",function(){
            $(this).css("display","none");
            $(".buttonPlus").css("z-index",1);
        });
    });
});