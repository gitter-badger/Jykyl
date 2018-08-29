"use strict";
var _this = this;
exports.__esModule = true;
var fs_1 = require("fs");
var fs_2 = require("fs");
var packedObjectBoilerplate = {
    fileContnent: null,
    fileType: "",
    emit: function (command) {
        _this.fileContnent = command(_this.fileContnent);
        return _this;
    }
};
exports.pack = {
    packRead: function (filepath) {
        fs_1.readFile(filepath, function (err, data) {
            var packedFile = packedObjectBoilerplate;
            if (err)
                throw err;
            else
                packedFile.fileContnent = data;
            return packedFile;
        });
    },
    packWrite: function (packedObject, filepath) {
        fs_2.writeFile(filepath, packedObject.fileContnent, { mode: "w+" }, function (err) {
            if (err) {
                throw err;
            }
        });
    }
};
exports.processJavaScript = function (filecontnent) {
};
