/*jshint esversion: 6 */

$(document).ready(function () {
    $("main").append("<div class='flex'></div>");
    $(".flex").css({"display": "flex", "justify-content": "space-between", "flex-wrap":"wrap"});
    for (i=0;i<products.length; i++){
        $(".flex").append(`<div class = "item"><h1>${products[i].name}</h1><img src=${products[i].img}><h4>${products[i].price} €</h4><p>${products[i].stock} in Stock</p></div>`);

    }
    
});