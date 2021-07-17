/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function loadStats() {
  let infoJson;
  let request = new XMLHttpRequest();
  request.withCredentials=true;
  request.onreadystatechange = function() {
    if (this.status==200 && this.readyState==4){
      infoJson=JSON.parse(this.responseText);
      document.getElementById("stats").innerHTML=
      `<style> 
      #stats {
        text-align:center;
        margin:10px 10px;
      }
      </style>
      
      
      <h2> Number of Cases Today: ${infoJson.Global.NewConfirmed}</p>
      <h2> Total Confirmed Cases: ${infoJson.Global.TotalConfirmed}</p>
      <h2> Number of Deaths Today: ${infoJson.Global.NewDeaths}</p>
      <h2> Total Number of Deaths: ${infoJson.Global.TotalDeaths}</p>
      <h2> Number of Recoveries Today: ${infoJson.Global.NewRecovered}</p>
      <h2> Total Number of Recoveries: ${infoJson.Global.TotalRecovered}</p>
      `
    }
  }
  request.open("GET", "https://api.covid19api.com/summary", true);
  request.send();
}