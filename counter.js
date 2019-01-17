

var s = 3;
var t = 5;
var g = 114;
var r = 2;

function howMany() {
  var numberSelected = 0;
  for (var i = 0; i < 15; i++) {
    if (i === s || i === t || i == g || i == r) {
      numberSelected++;
    }
  }
  return numberSelected;
}

console.log(howMany())