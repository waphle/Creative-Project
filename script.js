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

// Server stuff
function reqListener() {
  car data = JSON.parse(this.responseText);
  console.log(data);
}

function reqError(err) {
  console.log('Fetch Error :-S', err);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get','./api/some.json', true);
oReq.send();

fetch('./api/some.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
});

fetch('users.json').then(function(response) {
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Date'));

  console.log(response.status);
  console.log(response.statusText);
  console.log(response.type);
  console.log(response.url);
});
