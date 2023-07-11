const loadHeader = async () => {
    if (getHeader() === undefined) {
        await $.get('/header').done((res_data) => {
            header = res_data;
        });
    }
    $('#_header').html(getHeader());
}

const routePages = () => {
    $("#loginBtn").on('click', () => {
        window.location.href = '/login';
    });

    $("#homeBtn").on('click', () => {
        window.location.href = '/';
    });

    $("#registerBtn").on('click', () => {
        window.location.href = '/register';
    });
}
