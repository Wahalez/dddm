const getAllCities = async function () {
  return await $.ajax({
    url: "https://data.gov.il/api/3/action/datastore_search",
    dataType: "json",
    data: {
      resource_id: "d4901968-dad3-4845-a9b0-a57d027f11ab",
      limit: 10000,
      q: request.term,
    },
    success: function (data) {
      const records = data.result.records;
      const cityNames = records.map((record) => record["שם_ישוב_לועזי"]);
      cityArray = cityNames;
      // Filter the city names based on the user's input
      var filteredCities = cityNames.filter(function (city) {
        return city.toLowerCase().indexOf(request.term.toLowerCase()) === 0;
      });
      response(filteredCities);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      response([]);
    },
  });
};

$("#city").autocomplete({
  minLength: 2,
  source: getAllCities, // Set GetAllCities as the source for autocomplete suggestions
});

// const getAllCities = async function (request, response) {
//   try {
//     const data = await $.ajax({
//       url: "https://data.gov.il/api/3/action/datastore_search",
//       data: {
//         resource_id: "d4901968-dad3-4845-a9b0-a57d027f11ab",
//         limit: 10000,
//         q: request.term.toLowerCase(),
//       },
//     });

//     const records = data.result.records;
//     const cityNames = records.map((record) => record["שם_ישוב_לועזי"]);

//     // Filter the city names based on the user's input
//     const filteredCities = cityNames.filter(function (city) {
//       return city.toLowerCase().indexOf(request.term.toLowerCase()) === 0;
//     });

//     response(filteredCities);
//   } catch (error) {
//     console.error("Error:", error);
//     response([]);
//   }
// };

// $("#city").autocomplete({
//   minLength: 2,
//   source: getAllCities, // Set getAllCities as the source for autocomplete suggestions
// });
