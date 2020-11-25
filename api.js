const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const tokenUrl = "https://auth.skogsstyrelsen.se/connect/token";
const apiUrl =
  "https://api.skogsstyrelsen.se/sksapi/v0.1/Raster/Scl/HistogramDateSummary";
const client_id = "17ffaee2-44f6-4c9f-b320-90a17c531f5f";
const client_secret = "dafa5c9b-b7ac-993f-473d-7f971cec4f03";
const scope = "sks_api";

fetch(proxyUrl + tokenUrl, {
  method: "POST",
  body:
    "grant_type=client_credentials&client_id=" +
    client_id +
    "&client_secret=" +
    client_secret +
    "&scope=" +
    scope,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) =>
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: data.token_type + " " + data.access_token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const ul = document.getElementById("test");
        for (let i = 0; i < data.length; i++) {
          var el = data[i].datum;
          const createLi = document.createElement("li");
          createLi.textContent = el;
          ul.appendChild(createLi);
        }
        const maxValue = document.getElementById("maxValue");
        const minValue = document.getElementById("minValue");
        maxValue.textContent = "Min date:" + data[0].datum;
        minValue.textContent = "Max date:" + data[data.length - 1];

        console.log(data);
      })
      .catch((error) => console.log(error))
  )
  .catch((error) => console.log(error));
