import {request} from "http";

$("#request").on("click", function() 
{
    var request = $.get("http://localhost:591/");
    request.done(function(data)
    {
        console.log(data);
    });
    request.fall(function(jqXHR, textStatus, errorThrown)
    {
        console.log(textStatus, errorThrown);
    });
});