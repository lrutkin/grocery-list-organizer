$(document).ready(function() {
  $("#glo").submit(function(event) {
    const vegetable = $("#vegetable").val().toUpperCase();
    const fruit = $("#fruit").val().toUpperCase();
    const dairy = $("#dairy").val().toUpperCase();
    const protein = $("#protein").val().toUpperCase();
    const dessert = $("#dessert").val().toUpperCase();
    let groceryList = [vegetable, fruit, dairy, protein, dessert];
    
    groceryList.sort(); 

    

    event.preventDefault();
  }); 
});