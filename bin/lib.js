"use strict";
var _this = this;
exports.__esModule = true;
var fs_1 = require("fs");
var emitFunc;
var packedObjectBoilerplate = {
    fileContnent: null,
    fileType: "",
    emit: function (command) {
        _this.fileContnent = command();
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
    }
};
