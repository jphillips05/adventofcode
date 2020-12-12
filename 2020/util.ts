const fs = require('fs')

export class Util {
    static ReadFile = (fileName: string, shouldSplit:boolean = true, delimiter: string = '\n') => {
        if(!shouldSplit) return fs.readFileSync(`./${fileName}`, 'utf8')
        return fs.readFileSync(`./${fileName}`, 'utf8').split(delimiter);
    }
}