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
  
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    if (password === confirmPassword) {
      // Passwords match, proceed with registration logic
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
  
      // Add your registration code here using the firstName and lastName variables
  
      alert('Registration successful!');
      window.location.href = 'success.html';
    } else {
      alert("Passwords do not match!");
    }
  }
  
  $(function() {
    $("#registrationForm").submit(comparePasswords);
  });
  
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
