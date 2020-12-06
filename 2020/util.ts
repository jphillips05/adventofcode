const fs = require('fs')

export class Util {
    static ReadFile = (fileName: string, delimiter?: string): string[] => {
        if(!delimiter) {
            delimiter = '\n'
        }
        return fs.readFileSync(`./${fileName}`, 'utf8').split(delimiter);
    }
}