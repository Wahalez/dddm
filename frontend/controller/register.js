$(document).ready(() => {
    document.getElementById('loginBtn').addEventListener('click', function () {
        window.location.href = '/login';
    });
    document.getElementById('homebtn').addEventListener('click', function () {
        window.location.href = '/';
    });
    document.getElementById('registerbtn').addEventListener('click', function () {
        window.location.href = '/register';
    });
    // document.getElementById('console').addEventListener('click', function () {
    //     window.location.href = '/consoles';
    // });
    // document.getElementById('allGames').addEventListener('click', function () {
    //     window.location.href = '/games';
    // });

    fetchCities();

    $("#city").autocomplete({
        minLength: 2,
        source: function (request, resolve) { // fetch new values with request.term
            const filteredCities = getCities().filter(function (city) {
                return city.toLowerCase().indexOf(request.term.toLowerCase()) === 0;
            });
            resolve(filteredCities);
        }
    });

});
$(function() {
    $('#firstName').on('input', function() {
      var inputValue = $(this).val();
      var sanitizedValue = sanitizeInput(inputValue);
      $(this).val(sanitizedValue);
    });
});

    function sanitizeInput(input) {
      // Remove any non-letter characters using regular expression
      var sanitized = input.replace(/[^a-zA-Z]/g, '');
      return sanitized;
    }
  });
const handle_register = (event) => {
    event.preventDefault();
    if (comparePasswords(event)) { // continue
        alert("chupapi");
        $.post("/new_user", {fname: "chupapi"});
    }
};

function comparePasswords(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    return password === confirmPassword;
}
