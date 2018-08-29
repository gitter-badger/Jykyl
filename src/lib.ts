import {readFile} from "fs"
import {writeFile} from "fs"
const packedObjectBoilerplate = {
    fileContnent: null,
    fileType: "", //currently unused
    emit: (command: Function) => {
        this.fileContnent = command(this.fileContnent);
        return this;
    }
}
export const pack = {
    packRead: (filepath: string) => {
        readFile(filepath,(err,data) => {
            var packedFile = packedObjectBoilerplate;
            if (err) throw err
            else packedFile.fileContnent = data
            return packedFile;
        })
    },
    packWrite: (packedObject,filepath: string) => {
        writeFile(filepath,packedObject.fileContnent,{mode: "w+"},(err) => {
            if(err)
            {
                throw err;
            }
        })
    }
}
export const processJavaScript = (filecontnent) => {
    
}