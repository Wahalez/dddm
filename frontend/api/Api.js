$(function() {
  // Set up Autocomplete
  $("#city").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://api.geonames.org/searchJSON",
        dataType: "json",
        data: {
          country: "IL",
          featureCode: "PPL",
          maxRows: 1000,
          username: "dddm",
          name_startsWith: request.term
        },
        success: function(data) {
          response(data.geonames.map(function(city) {
            return city.name;
          }));
        },
        error: function(xhr, status, error) {
          console.error('Error:', error);
          response([]);
        }
      });
    },
    minLength: 1 // Minimum number of characters before triggering autocomplete
  });
});