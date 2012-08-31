var config = module.exports;

config["Browser tests"] = {
    environment: "browser",
    libs: ["public/js/knockout.js","public/js/lodash.js","public/js/jquery.js","public/js/helpers.js","public/js/viewmodels/item.js"],
    sources: ["public/js/app.js"],
    tests: ["public/js/testes.js"]
};
