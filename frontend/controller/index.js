function refreshPage() {
    window.location.reload();
}

$(document).ready(function() {
    $('#loginBtn').on('click', function() {
      window.location.href = './../view/login.html';
    });

    $('#homebtn').on('click', function() {
      window.location.href = './../view/index.html';
    });

    $('#registerbtn').on('click', function() {
      window.location.href = './../view/Register.html';
    });

    $('#console').on('click', function() {
      window.location.href = './../view/console.html';
    });

    $('#allGames').on('click', function() {
      window.location.href = './../view/games.html';
    });
  });
  
  
  function comparePasswords(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
      // Passwords match, proceed with registration logic
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;

      // Add your registration code here using the firstName and lastName variables

      alert('Registration successful!');
      window.location.href = 'success.html'
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }

} 

$(function() {
    var availableTags = [
      "Sony playstations",
      "Xbox",
      "Nintendo",
      "Games",
      "Xbox games",
      "Nintendo games",
      "Sony playstations games",
      "computer games",
      "Console",
    ];
    $("#search").autocomplete({
      source: availableTags
    });
  });
  function handleSearch(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query from the input field
    console.log("Search query:", searchQuery);

    window.location.href = "search-results.html?q=" + encodeURIComponent(searchQuery);
}
var searchnameInput = document.getElementById("search");
var searchnameValue = searchnameInput.value;
console.log(searchnameValue);
