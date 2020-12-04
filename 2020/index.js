const Day2 = require('./day2')
const util = require('./util.js')
const Dat3Slope = require('./day3Slope');
const day3Slope = require('./day3Slope');

day3b()


function day3b() {
    let data = util.ReadFile('/data/Day3.txt');
    let slopes = [
        {x: 1, y: 1},
        {x: 3, y: 1},
        {x: 5, y: 1},
        {x: 7, y: 1},
        {x: 1, y: 2}
    ]

    let totalCount = 1
    for(let slope of slopes) {
        totalCount = totalCount * day3Slope.treeCount(slope.x, slope.y, data)
    }

    console.log(totalCount)
}

//200
function day3a() {
    let data = util.ReadFile('/data/Day3.txt');
    let count = 0, x = 1, y = 0
    for(let i = 0; i < data.length-1; i++) {
        y ++
        x = x + 3
        if(x > data[y].length) {
            x = x%data[y].length
        }

        console.log(data[y], x, data[y].charAt(x-1) === '#')
        if(data[y].charAt(x-1) === '#') {
            count ++
        }
        
    }

    console.log(count)
}

function day2b() {
    let count = 0
    util.ReadFile('./data/Day2.txt')
        .forEach(row => {
            let model = Day2.buildModel(row)
            if(Day2.isValidIndexCount(model.Letter, model.Password, model.Min, model.Max)) {
                count ++
            }
        })

    console.log(count);
}

function day2a() {
    let count = 0
    util.ReadFile('./data/Day2.txt')
        .forEach(row => { 
            let model = Day2.buildModel(row)
            let instanceNum = Day2.countInstanceOf(model.Letter, model.Password)
            if(Day2.isValidCount(instanceNum, model.Min, model.Max)) {
                count ++
            }
        })
    
    console.log(count)
}

