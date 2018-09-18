(function() {

  'use strict';

  var d = new Date()
  document.getElementById("footer").innerHTML = document.getElementById("footer").innerHTML + " " + d.getFullYear() + " &nbsp;| &nbsp;<a href=\"mailto:brian@laurenceclark.com\">brian@laurenceclark.com</a>";

  var years = d.getFullYear() - 2002;
  document.getElementById("yearsof").innerHTML = years + " " + document.getElementById("yearsof").innerHTML;
  document.getElementById("descrip").innerHTML = document.getElementById("descrip").innerHTML + years + " years.";

})();