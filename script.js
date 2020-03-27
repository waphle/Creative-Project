// Portrait url
function myFunction() {
  var x = document.getElementById("portraitJeff").src;
  document.getElementById("demo").innerHTML = x;
}

// Timer alert message for email
function emailFunction() {
  setTimeout(function(){ alert('To copy my email address, left click the link and choose "Copy email address."'); }, 2000); // 2000 equals to 2 seconds
}

// HTML Linking functions
function homeLink() {
  location.replace("index.html")
}
function artLink() {
  location.replace("art.html")
}
function photoLink() {
  location.replace("photography.html")
}
function devArtLink() {
  location.replace("https://www.deviantart.com/waphlebruv")
}
function instaLink() {
  location.replace("https://www.instagram.com/jeffzhang._.photography/?hl=en")
}
