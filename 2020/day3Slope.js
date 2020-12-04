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