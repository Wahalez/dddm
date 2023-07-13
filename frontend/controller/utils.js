async function initPage() {
    await checkAndInitModel();
    await loadHeader();
}

async function checkAndInitModel() {
    let model = Model.getInstance();
    if (!Array.isArray(model.getPlatforms()) || ! model.getPlatforms().length) {
        await initPlatforms();
    }
    if (!Array.isArray(model.getCategories()) || ! model.getCategories().length) {
        await initCategories();
    }
}
async function initPlatforms() { // TODO: request platforms and save to model
    let model = Model.getInstance();
    $.get('/get_platforms').done(platforms => {
        console.log(platforms);
    });
}
async function initCategories() { // TODO: request categories and save to model
    let model = Model.getInstance();
    $.get('/get_categories').done(categories => {
        console.log(categories);
    });
}
