module.exports = {
    test_build: "browserify build/assets/js/setup.js -s setup > build/assets/js/setup.bundle.js -d --full-paths",
    doc: "jsdoc2md -t docTemplate.handlebars src/scripts/**/*.js > README.md"
};
