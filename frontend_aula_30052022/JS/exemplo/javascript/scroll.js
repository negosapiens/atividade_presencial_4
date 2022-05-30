var num=0;
$(document).ready(function(){
$("div").scroll(function(){
$("p").text(num+=1);
});
});

