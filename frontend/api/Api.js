$("#city").autocomplete({
  source: function (request, response) {
    $.ajax({
      url: "https://data.gov.il/api/3/action/datastore_search",
      dataType: "json",
      data: {
        resource_id: "d4901968-dad3-4845-a9b0-a57d027f11ab",
        limit: 10000,
        q: request.term, // Pass the user's input as a query parameter
      },
      success: function (data) {
        const records = data.result.records;
        const cityNames = records.map((record) => record["שם_ישוב_לועזי"]);
        cityArray = cityNames; // Assign the city names to the cityArray variable in cities.js
        response(cityNames);
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        response([]); // Return an empty array in case of error
      },
    });
  },
  minLength: 2, // Minimum number of characters before triggering autocomplete
  delay: 300, // Delay in milliseconds before sending the AJAX request
});
