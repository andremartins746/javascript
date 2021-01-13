// IIFE -> Immediately Invoket Function Espression
// esse tipo de função é muito usado para fugir do escopo global, principalmente nos browser

//para declararmos uma função desta precisamos colocar uma função anonima dentro dos paranteses
(function() {
    console.log("será execultado na hora!")
    console.log("foge do escopo mais abrangente!")
})()