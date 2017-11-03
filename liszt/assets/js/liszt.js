$(document).ready(function() {

  // Global Variables
  let item = null;

  // Add item
  addItem = function () {
    if (document.getElementById("new-item").value !== "") {
      let item = document.getElementById("new-item").value;
      $("#list").append("<div id='list-item'>" + "<span>" + item + "</span>" + "<i class='fa fa-check-circle-o' aria-hidden='true'></i>" + "</div>");

      item = null;
      document.getElementById("new-item").value = null;
    }
  }

  // Run Functions
  $("#new-item").keydown(function(e) {
    if (e.which == 13) {
      addItem();
    }
  });
});