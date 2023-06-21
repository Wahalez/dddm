$(document).ready(() => {
    document.getElementById('loginBtn').addEventListener('click', function() {
        window.location.href = '/login';
    });
    document.getElementById('homebtn').addEventListener('click', function() {
        window.location.href = '/';
    });
    document.getElementById('registerbtn').addEventListener('click', function() {
         window.location.href = '/register';
    });
    document.getElementById('console').addEventListener('click', function() {
        window.location.href = '/consoles';
    });
    document.getElementById('allGames').addEventListener('click', function() {
        window.location.href = '/games';
    });
});
$(function() {
    $('#firstName').on('input', function() {
      var inputValue = $(this).val();
      var sanitizedValue = sanitizeInput(inputValue);
      $(this).val(sanitizedValue);
    });

    function sanitizeInput(input) {
      // Remove any non-letter characters using regular expression
      var sanitized = input.replace(/[^a-zA-Z]/g, '');
      return sanitized;
    }
  });
  $(function() {
    $('#lastName').on('input', function() {
      var inputValue = $(this).val();
      var sanitizedValue = sanitizeInput(inputValue);
      $(this).val(sanitizedValue);
    });

    function sanitizeInput(input) {
      // Remove any non-letter characters using regular expression
      var sanitized = input.replace(/[^a-zA-Z]/g, '');
      return sanitized;
    }
  });
const handle_register  = (event) => {
    event.preventDefault(); 
    if(comparePasswords(event)){
        // continue
        alert("chupapi");
        $.post("/new_user", {fname: "chupapi"});
    }
};

function comparePasswords(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    return password === confirmPassword; 
} 
