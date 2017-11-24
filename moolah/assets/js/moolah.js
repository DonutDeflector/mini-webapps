// Load exchange rates data via AJAX:
$.getJSON(
  'http://api.fixer.io/latest',
  function(data) {
    // Check money.js has finished loading:
    if ( typeof fx !== "undefined" && fx.rates ) {
      fx.rates = data.rates;
      fx.base = data.base;
    } else {
    // If not, apply to fxSetup global:
      var fxSetup = {
        rates : data.rates,
        base : data.base
      }
    }
  }
);

let foo = null;

function bar() {
  foo = document.getElementById("base").value;  
  return foo;
}

$("#submit").click(function(e) {
  bar();
});
