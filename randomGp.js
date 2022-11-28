$(document).ready(function(){
    for (let index = 0; index < 20; index++) {

        var heightWindow=$(window).height()-100;
        var widthWindow=$(window).width()-100;
        var randh=Math.floor((Math.random() * heightWindow) + 1);
        var randw=Math.floor((Math.random() * widthWindow) + 1);


        $("#aPrin").append('<img class="gp2" id="'+index+"idGp"+'" src="pictures/gpnoel.png" alt="grand-pere en pere noel">')
        $('#'+index+'idGp').css({"margin-top": randh+"px",
            "margin-left":randw+"px",
            "position":"fixed"})
    }

    $('.gp2').transition({y:'-1000px'})


});