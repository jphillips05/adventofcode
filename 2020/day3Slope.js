module.exports = {
    treeCount: (xInc, yInc, data) => {
        
        let count = 0, x = 1, y = 0
        while(y < data.length -1) {
            y = y + yInc
            x = x + xInc

            if(x > data[y].length) {
                x = x%data[y].length
            }

            if(data[y].charAt(x -1) === '#') {
                count ++
            }
            
        }

        return count
    }
}

//200
// function day3a() {
//     let data = util.ReadFile('/data/Day3.txt');
//     let count = 0, x = 1, y = 0
//     for(let i = 0; i < data.length-1; i++) {
//         y ++
//         x = x + 3
//         if(x > data[y].length) {
//             x = x%data[y].length
//         }

//         console.log(data[y], x, data[y].charAt(x-1) === '#')
//         if(data[y].charAt(x-1) === '#') {
//             count ++
//         }
        
//     }

//     console.log(count)
// }

// function day3b() {
//     let data = util.ReadFile('/data/Day3.txt');
//     let slopes = [
//         {x: 1, y: 1},
//         {x: 3, y: 1},
//         {x: 5, y: 1},
//         {x: 7, y: 1},
//         {x: 1, y: 2}
//     ]

//     let totalCount = 1
//     for(let slope of slopes) {
//         totalCount = totalCount * day3Slope.treeCount(slope.x, slope.y, data)
//     }

//     console.log(totalCount)
// }