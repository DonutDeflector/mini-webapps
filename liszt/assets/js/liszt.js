$(document).ready(function() {

  // Global Variables
  var numberList = 0;
  var numberCompleted = 0;

  console.log(numberList);
  console.log(numberCompleted);

  // Add List Heading
  var addListHeading = function() {
    if (numberList === 0) {
      $("#list").append("<h2>List</h2>");
      numberList = numberList++
      return numberList;
    } else {
      numberList = numberList++;
      return numberList;
    }
  }

  // Add item
  var addItem = function() {
    if (document.getElementById("new-item").value !== "") {
      let item = document.getElementById("new-item").value;
      $("#list").append("<div id='list-item'>" + "<p>" + item + "<div id='item-actions'><button id='done'>Done</button><button id='delete'>Delete</button></div>" + "</div>");

      item = null;
      document.getElementById("new-item").value = null;
    }
  };

  // Run Functions
  $("#new-item").keydown(function(e) {
    if (e.which == 13) {
      addListHeading();
      addItem();
    }
  });

  // Done and Delete Actions
  $("#done").click(function() {
    if (numberCompleted === 0) {
      $('container').append("<div id='completed'><h2>Completed</h2></div>")
    }
  });
});