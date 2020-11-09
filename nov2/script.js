var cont = document.createElement("div");
cont.setAttribute("class", "container");
document.body.append(cont);

var row = document.createElement("div");
row.setAttribute("class", "row");
async function weather() {
  var countries = await fetch("https://restcountries.eu/rest/v2/all");

  var Countrydata = await countries.json();
  console.log(Countrydata);
  Countrydata.filter(async (x) => {
    var weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=33681e2f3e767520f9e4b360de55ec76`
    );
    var weatherData = await weatherAPI.json();
    console.log(weatherData);
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-4 col-sm-12");

    var div = document.createElement("div");
    div.setAttribute("class", "card");
    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-header");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", `${x.flag}`);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-body");
    h5.innerHTML = `${x.name}`;
    div.append(h5, img, div2);

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerHTML = `Capital: <span class=capital>${x.capital}</span>`;
    var p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.innerHTML = `Country Codes: <span style="font-weight:bolder">${x.alpha2Code} ${x.alpha3Code}</span>`;
    var p3 = document.createElement("p");
    p3.setAttribute("class", "card-text");
    p3.innerHTML = `Region: <span style="font-weight:bolder">${x.region}</span>`;
    var p4 = document.createElement("div");
    // p4.setAttribute('class','btn btn-primary');
    p4.innerHTML = `<button type="button" class="btn btn-secondary" data-container="body" title="Weather:${weatherData.weather[0].description} " data-toggle="popover" data-placement="top" data-content="Temp: ${weatherData.main.temp} |
     Pressure: ${weatherData.main.pressure} |
     Humidity: ${weatherData.main.humidity}">
     Click for Weather
     </button>`;

    div2.append(p, p2, p3, p4);
    row.append(col);
    col.append(div);
    cont.append(row);
  });
}
weather();
