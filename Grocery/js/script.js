/*jshint esversion: 6 */

let productlist = JSON.parse(products);

$(document).ready(function () {
    $("main").append("<div class='flex'></div>");
    $("flex").css({"display": "flex", "justify-content": "space-between", "flex-wrap:":"wrap"});
    for (i=0;i<productlist.length; i++){
        $("flex").append(`<h1>${productlist[i].name}</h1><img src=${productlist[i].img}><h4>${productlist[i].price}</h4><p>${productlist[i].stock}</p>`);
    }
    
});