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

const handle_register = (event) => {
    event.preventDefault();
    if (comparePasswords(event)) {
        const userData = createUserData();
        addNewUser(userData);
    }
};

const createUserData = () => {
    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const fname = $('#firstName').val();
    const lname = $('#lastName').val();
    const phone = $('#homenumber').val();
    const birthday = $('#dateOfBirth').val();
    const city = $('#city').val();
    const street = $('#street').val();
    const house_number = $('#homenumber').val();
    const address = {
        city,
        street,
        house_number
    };

    const userData = {
        username,
        password,
        type: '1',
        fname,
        lname,
        email,
        phone: '1',
        birthday,
        address
    };

    return userData;
};

const addNewUser = (userData) => {
    $.post('/create_user', userData).done(savedUser => {
        console.log('User registered successfully:', savedUser);
    }).fail(error => {
        console.error('Error registering user:', error);
    });
};

function comparePasswords(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    return password === confirmPassword;
}
