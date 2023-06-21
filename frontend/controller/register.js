$(document).ready(() => {
  fetchCities();

  $("#city").autocomplete({
    minLength: 2,
    source: function (request, resolve) {
      // fetch new values with request.term
      const filteredCities = getCities().filter(function (city) {
        return city.toLowerCase().indexOf(request.term.toLowerCase()) === 0;
      });
      resolve(filteredCities);
    },
  });
});

const handle_register = (event) => {
  event.preventDefault();
  if (comparePasswords(event)) {
    // continue
    alert("chupapi");
    $.post("/new_user", { fname: "chupapi" });
  }
};

function comparePasswords(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  return password === confirmPassword;
}
