
$(document).ready(function(){
    var heightWindow=$(window).height();
    $(document.body).height(heightWindow);
    $(window).resize(function(){
        var heightWindow=$(window).height();
        $(document.body).height(heightWindow);
        // console.log(heightWindow);
    });
});