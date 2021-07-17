/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function getNews() {
  let infoJson;
  let request = new XMLHttpRequest();
  request.withCredentials=true;
  request.onreadystatechange = function() {
    if (this.status==200 && this.readyState==4) {
      infoJson=JSON.parse(this.responseText);
      for (let i =0; i < 50;i++) {
        document.getElementById("news").innerHTML += 
        `<li class="list-group-item"> <a href="${infoJson.articles[i].link}"> ${infoJson.articles[i].title}</a> </li>`;
        document.getElementById("news").innerHTML += 
        `<img src=${infoJson.articles[i].media}>`;
      }
    }
  }
  request.open("GET", "https://free-news.p.rapidapi.com/v1/search?q=covid19&lang=en", true);
  request.setRequestHeader("x-rapidapi-key", "7c67263d8fmsh81462644c030c50p1c5df4jsn899d79e8dfeb");
  request.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");
  request.send();
}