const button = document.getElementById("myButton");
button.addEventListener("click", fetchData);

function fetchData() {
  fetch(
    "http://api.geonames.org/searchJSON?country=IL&featureCode=PPL&maxRows=1000&username=dddm"
  )
    .then((response) => response.json())
    .then((data) => {
      const cities = data.geonames;
      const arrCities = cities.map((city) => city.name);
      document.getElementById("citiesList").textContent =
        arrCities.join(", ");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}