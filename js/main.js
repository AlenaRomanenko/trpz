$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});

var button = document.getElementById("clickme"),
count = 0;
button.onclick = function(){
    count++;
    console.log(count);
    document.getElementById("displayCount").innerHTML = count;
  }