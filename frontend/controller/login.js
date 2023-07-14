$(document).ready(() => {
    initPage().then(() => {
        routePages();
        console.log(Model.getInstance().getPlatforms());
        console.log(Model.getInstance().getCategories());
    });
});

function login(event) {
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    if (check_input(username, password)) {
        $.ajax({
            url: '/authenticate',
            type: 'get',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                if (res) {
                    alert("Successfully logged in");
                    window.location.href = "/"; // redirect back to main screen
                }
            },
            error: function (err) {
                console.error(err);
            }
        });
    }
}

function check_input(username, password) {
    return true;
}
