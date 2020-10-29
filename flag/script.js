function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (xhr.status == 200) {
          resolve(xhr.response);
        } else {
          reject({
            message: xhr.statusText,
          });
        }
        xhr.onerror = function () {
          reject({
            message: xhr.statusText,
          });
        };
      };
      xhr.send();
    });
  }
  makeRequest("GET", "https://restcountries.eu/rest/v2/all")
    .then((result) => {
      var obj = JSON.parse(result);
      console.log(obj);

      var container = document.createElement("div");
      container.setAttribute("class", "container");
      var row = document.createElement("div");
      row.setAttribute("class", "row ml-3");
      for (var i = 0; i < obj.length; i++) {
        var c = document.createElement("div");
        c.id = "colorgreen";
        c.innerHTML = obj[i].capital;

        var div = document.createElement("div");
        div.setAttribute("class", "card mt-4 ml-5 mb-4");
        var div1 = document.createElement("div");
        div1.setAttribute("class", "card-header");
        div1.innerHTML = obj[i].name;
        var image = document.createElement("img");
        image.setAttribute("class", "card-img-top");
        image.src = obj[i].flag;
        var body = document.createElement("div");
        body.setAttribute("class", "card-body");
        body.id = "color";
        body.innerHTML = `Capital: <span>${obj[i].capital} </span><br>
           Region: <b> ${obj[i].region}</b><br>
           Lat,Long: <b>${obj[i].latlng}</b> <br>
           Currency code: <b>${obj[i].currencies[0].code} </b><br>
           Name: <b>${obj[i].currencies[0].name} </b><br>
           symbol: <b>${obj[i].currencies[0].symbol}`;

        div.append(div1, image, body);
        row.append(div);
        container.append(row);
        document.body.append(container);
      }
    })
    .catch((error) => {
      console.log(error);
    });
