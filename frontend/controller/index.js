function refreshPage() {
    window.location.reload();
}
// Get all the add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Iterate over each button and attach a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// Function to handle the click event and add the product to the cart
function addToCart(event) {
  // Get the product ID from the data attribute of the clicked button
  const productId = event.target.dataset.productId;

  // Perform any additional logic, such as fetching product details from an API or local storage

  // Add the product to the cart (you can implement your own cart logic here)
  addToCartLogic(productId);
}

// Function to implement the cart logic and update the UI
function addToCartLogic(productId) {
  // Perform the necessary operations to add the product to the cart
  // Update the cart state or store the product in a data structure

  // Example: Add the product to a cartItems array
  const cartItems = [];

  // Fetch the product details based on the product ID (replace this with your own logic)
  const product = fetchProductDetails(productId);

  // Add the product to the cartItems array
  cartItems.push(product);

  // Update the cart display or perform any additional logic
  updateCartDisplay(cartItems);
}

// Function to fetch product details based on the product ID (replace this with your own logic)
function fetchProductDetails(productId) {
  // Perform the necessary operations to fetch the product details based on the ID
  // Return the product object or data

  // Example: Return a mock product object
  return {
    id: productId,
    name: "Product Name",
    price: 10.99
  };
}

// Function to update the cart display or perform any additional cart logic
function updateCartDisplay(cartItems) {
  // Perform the necessary operations to update the cart display
  // You can use this function to manipulate the DOM and show the added product in the cart UI
  // Update the cart count, total price, or any other relevant information
}

$(document).ready(function () {
  $('#playStation').click(function (e) {
      e.preventDefault();
      $('.card').hide(); // Hide all cards
      // Add your code for navigating to the PlayStation page here
  });

  $('#nintendoBtn').click(function (e) {
      e.preventDefault();
      $('.card').hide(); // Hide all cards
      // Add your code for navigating to the Nintendo page here
  });

  $('#xboxBtn').click(function (e) {
      e.preventDefault();
      $('.card').hide(); // Hide all cards
      // Add your code for navigating to the Xbox page here
  });
});
$(document).ready(function () {
  $('#playStation').click(function (e) {
      e.preventDefault();
      $('.card').hide(); // Hide all existing cards

      // Array of unique descriptions
      var descriptions = [
          "Sony 5 the best console in the world 1T",
          "sony 4 pro 4k display 500MG",
          "sony 4 pro 4k display 1T"
      ];

      // Add three Sony PlayStation cards with unique descriptions
      for (var i = 0; i < 3; i++) {
          var cardHtml = `
          <div class="col-md-4 mt-3">
              <div class="card text-bg-secondary mb-3">
                  <img src="path/to/image.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Sony playstation</h5>
                      <p class="card-text">${descriptions[i]}</p>
                      <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
              </div>
          </div>`;

          $('#cards .row').append(cardHtml);
      }
  });
});
$(document).ready(function () {
  // Shopping cart array to store the selected products
  var shoppingCart = [];

  // Click event for the "לרכישה" (Purchase) button
  $('#playStation').click(function (e) {
      e.preventDefault();

      // Create a new product object with unique ID, title, and description
      var product = {
          id: generateUniqueId(), // Generate a unique ID for the product
          title: "Sony PlayStation", // Title of the product
          description: "Product description" // Description of the product
      };

      // Add the product to the shopping cart array
      shoppingCart.push(product);

      // Redirect to the cart.html page
      window.location.href = "./../view/cart.html";
  });

  // Function to generate a unique ID for each product
  function generateUniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
  }
});document.getElementById('cartbtn').addEventListener('click', function() {
  window.location.href = "./../view/cart.html";
});
document.getElementById('continueShoppingBtn').addEventListener('click', function() {
  window.location.href = "./../view/index.html";
});


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
    window.location.href = './../view/Playstation.html';
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
