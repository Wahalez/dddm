function refreshPage() {
    window.location.reload();
}
document.getElementById('loginBtn').addEventListener('click', function() {
  window.location.href = './../view/login.html';
});
 document.getElementById('homebtn').addEventListener('click', function() {
    window.location.href = './../view/index.html';
 });
 document.getElementById('registerbtn').addEventListener('click', function() {
    window.location.href = './../view/Register.html';
});
 document.getElementById('console').addEventListener('click', function() {
    window.location.href = './../view/console.html';
});
  document.getElementById('allGames').addEventListener('click', function() {
    window.location.href = './../view/games.html';
  });
  document.getElementById('playStation').addEventListener('click', function() {
    window.location.href = './../view/sonyPlaystation.html';
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
var searchnameValue = searchnameInput.value;
console.log(searchnameValue);
