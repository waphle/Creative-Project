// Portrait url
function myFunction() {
  var x = document.getElementById("portraitJeff").src;
  document.getElementById("demo").innerHTML = x;
}

// Timer alert message for email
function emailFunction() {
  setTimeout(function(){ alert('Left click the link and choose "Copy email address" to copy my email address to your clipboard.'); }, 2000); // 2000 equals to 2 seconds
}
