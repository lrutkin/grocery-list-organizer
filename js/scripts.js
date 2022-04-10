$(document).ready(function() {
  $("#glo").submit(function(event) {
    $("#glo").hide();
    const vegetable = $("#vegetable").val().toUpperCase();
    const fruit = $("#fruit").val().toUpperCase();
    const dairy = $("#dairy").val().toUpperCase();
    const protein = $("#protein").val().toUpperCase();
    const dessert = $("#dessert").val().toUpperCase();
    let groceryList = [vegetable, fruit, dairy, protein, dessert];
    
    groceryList.sort(); 
    
    groceryList.forEach(function(item) {
      let list = $("#finList");
      let li = document.createElement("li");
      li.innerText = item;
      list.append(li);
    //const sortArray = groceryList.slice();
    //sortArray.toString();
    });

    event.preventDefault();
  }); 
});