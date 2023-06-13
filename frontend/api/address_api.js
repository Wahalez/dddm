// Make a request to get info about the country Israel
const apiUrl = 'https://nominatim.openstreetmap.org/search?country=Israel&format=json&limit=1000&addressdetails=1&extratags=1&namedetails=1&featuretype=city';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the city names
    const cities = data.map(result => result.address.city);

    // Print the city names
    cities.forEach(city => console.log(city));
  });