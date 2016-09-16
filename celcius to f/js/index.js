$(document).ready(start);

var celsius = 0;
var fahrenheit = 0;

function start(){
  $('#cToF').click(getFValue);
  $('#fToC').click(getCValue);
}

function getFValue() {
  var fValue = convertCValue();
  fahrenheit = fValue;
  writeFtoPage();
}

function  convertCValue() {
  var cValue = $('#c').val();
  var convertedCValue = cValue * 1.8 + 32;
  return convertedCValue;
}

function writeFtoPage(){
  $('#f').val(fahrenheit);
}

function getCValue (){
  var cValue = convertFValue();
  celsius = cValue
  writeCtoPage();
}

function convertFValue() {
  var fValue = $('#f').val();
  var convertedFValue = (fValue - 32) / 1.8;
  return convertedFValue;

}

function writeCtoPage() {
  $('#c').val(celsius);
}
