"use strict";
/*jshint validthis: true */
var deepCopy = require("./deepCopy"),
    getRequiredFields = require("./getRequiredFields"),
    tableFactory = require("./tableFactory"),
    validateDataType = require("./validateDataType"),
    getInheritanceChain = require("./getInheritanceChain"),
    fullModel;

// builds the relational JSON database
function buildDatabase(graph) {
    var db = Object.create(null, {}),
        // store a copy of the model
        fullModel = deepCopy(graph);

    // create db tables
    Object.keys(graph).forEach(function(key) {
        if (!graph[key].primary || !graph[key].fields) {
            throw new Error("Graph table " + key + " has no fields or no primary key");
        } else {
            db[key] = tableFactory(key, graph, db);
        }
    });

    return Object.freeze(db);
}

module.exports = function(graph) {
    return buildDatabase(graph);
};
