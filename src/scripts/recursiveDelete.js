var getData = require("./getData");

function recursiveDelete(id, data, tableName, fullModel, db) {
    var target = getData(data, id, fullModel[tableName].primary);

    if (!target) {
        throw Error("Cannot delete non existent object id: " + id);
    }

    // check for parent
    if (fullModel[tableName].extends) {
        db[fullModel[tableName].extends.table].delete(id);
    }

    data.splice(data.indexOf(target), 1);
}

module.exports = recursiveDelete;