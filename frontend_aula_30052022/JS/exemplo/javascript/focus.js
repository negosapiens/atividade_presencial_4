$(document).ready(function(){
    $("input:text").focus(function(){
    $("p").text("Cursor está dentro da caixa de texto");
    })
    .blur(function(){
    $("p").text("Cursor deixou a caixa de texto");
    });
    });
    