const fs = require('fs')

module.exports = {
    ReadFile: (fileName, delimiter) => {
        if(!delimiter) {
            delimiter = '\n'
        }
        return fs.readFileSync(`./${fileName}`, 'utf8').split(delimiter);
    },
    AddsUp: (data, target) => {
        
        for(let i=0; i < data.length; i++) {
            let one = data[i]
            let arr = data
            arr.splice(i,1)
            for(let j = 0; j < arr.length; j++) {
                let two = arr[j]
                let arr2 = arr
                arr2.splice(j,-1)
                for(var k = 0; k<arr2.length; k++) {
                    if(one + two + arr2[k] === target) {
                        return one * two * arr2[k]
                    }
                }
            }
        }

        return 0
    }
}