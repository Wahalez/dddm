$(document).ready(() => {
    // document.getElementById('loginBtn').addEventListener('click', function () {
    //     window.location.href = '/login';
    // });
    document.getElementById('homeBtn').addEventListener('click', function () {
        window.location.href = '/';
    });
    document.getElementById('registerBtn').addEventListener('click', function () {
        window.location.href = '/register';
    });
    // document.getElementById('console').addEventListener('click', function () {
    //     window.location.href = '/consoles';
    // });
    // document.getElementById('allGames').addEventListener('click', function () {
    //     window.location.href = '/games';
    // });
});

function refreshPage() {
    window.location.reload();
}

// $(function() {
//     var availableTags = [
//       "Sony playstations",
//       "Xbox",
//       "Nintendo",
//       "Games",
//       "Xbox games",
//       "Nintendo games",
//       "Sony playstations games",
//       "computer games",
//       "Console",
//     ];
//     $("#search").autocomplete({
//       source: availableTags
//     });
// });

// function handleSearch(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the search query from the input field
//     console.log("Search query:", searchQuery);

//     window.location.href = "search-results.html?q=" + encodeURIComponent(searchQuery);
// }

// var searchnameInput = document.getElementById("search");
// var searchnameValue = searchnameInput.value;
// console.log(searchnameValue);
