const Model = (function () {
    let instance; // make the model a singleton

    let header = undefined;
    let cityArray = [];
    let platforms = [];
    let categories = [];

    function init() { // functions to control the model
        return {
            getCities: function () {
                return cityArray;
            },
            setCities: function (cities) {
                cityArray = cities;
            },
            getHeader: function () {
                return header;
            },
            setHeader: function (h) {
                header = h;
            },
            getPlatforms: function () {
                return platforms;
            },
            setPlatforms: function (p) {
                platforms = p;
            },
            getCategories: function () {
                return categories;
            },
            setCategories: function (c) {
                categories = c;
            }
        }
    }
    return { // return instance of the singleton model
        getInstance: function () {
            if (! instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
