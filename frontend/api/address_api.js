// Add an event listener to the button
const button = document.getElementById("myButton");
button.addEventListener("click", fetchData);

// Function to fetch data from the API
function fetchData() {
  fetch(
    "http://api.geonames.org/searchJSON?country=IL&featureCode=PPL&maxRows=1000&username=dddm"
  )
    .then((response) => response.json())
    .then((data) => {
      const cities = data.geonames;
      const arrCities = cities.map((city) => city.name);
      console.log(arrCities);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
