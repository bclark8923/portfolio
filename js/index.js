(function() {

  'use strict';

  var d = new Date()
  document.getElementById("footer").innerHTML = document.getElementById("footer").innerHTML + " " + d.getFullYear() + "&nbsp;&nbsp;|&nbsp;&nbsp;brian@laurenceclark.com";

  var years = d.getFullYear() - 2003;
  document.getElementById("yearsof").innerHTML = years + " " + document.getElementById("yearsof").innerHTML;
  document.getElementById("descrip").innerHTML = document.getElementById("descrip").innerHTML + years + " years.";

})();