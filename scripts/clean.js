const del = require('del')
const fs = require('fs')
del.sync(["bin/**/*"]);
fs.writeFile("bin/.gitkeep",'',{flag:"w+"},(err) => {
    if(err) {
        throw err;
    }
})
