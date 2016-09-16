$(document).ready(start);

var celsius = 0;
var fahrenheit = 0;

function start(){
  $('#cToF').click(getFValue);
  // $('#fToC').click(convertToC);
}

function getFValue() {
  var fValue = convertCelciusValue();
  fahrenheit = fValue;
  writeFtoPage();
}

function  convertCelciusValue() {
  var cValue = $('#c').val();
  // var convertedCValue = (cValue - 32) * .5556;
  return cValue;
}

function writeFtoPage(){
  $('#f').text(fahrenheit);
}

//
//   // fahrenheit =parseFloat($('#f').val());
//   // fahrenheit = parseFloat($('#c').val()-32) * .5556;
//
//
// }
//
// function convertToC() {
//   celsius = parseFloat($('#c').val());
// }
