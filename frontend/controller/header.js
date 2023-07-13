const loadHeader = async () => {
    let model = Model.getInstance();
    if (model.getHeader() === undefined) {
        await $.get('/header').done((res_data) => {
            model.setHeader(res_data);
        });
    }
    $('#_header').html(model.getHeader());
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
