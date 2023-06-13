function refreshPage() {
    window.location.reload();
}
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
  document.getElementById('homebtn').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  document.getElementById('register').addEventListener('click', function() {
    window.location.href = 'Register.html';
  });
  document.getElementById('console').addEventListener('click', function() {
    window.location.href = 'console.html';
  });
  document.getElementById('allGames').addEventListener('click', function() {
    window.location.href = 'games.html';
  });
  function comparePasswords(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Passwords match, proceed with registration
    // Add your registration logic here
    console.log("Registration successful");
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
var searchnameValue = usernameInput.value;
console.log(searchnameValue);