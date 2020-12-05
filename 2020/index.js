const Day2 = require('./day2')
const util = require('./util.js')
const Dat3Slope = require('./day3Slope');
const day3Slope = require('./day3Slope');
const passport = require('./day4Passport')


day5b()

//676
function day5b() {
    let data = util.ReadFile('/data/Day5.txt');

    let seats = [];
        
    data.forEach(row => {
        let d = row
            .replace(/B/gi, 1)
            .replace(/F/gi, 0)
            .replace(/R/gi, 1)
            .replace(/L/gi, 0);
        seats.push(parseInt(d, 2))

    });

    seats = seats.sort((a,b)=>a-b)

    for(let i = seats[0]; i < seats.length-1; i++) {
        if(seats[i] + 1 === seats[i+1]) {
            continue
        }

        console.log(seats[i]+1)
    }

}


function day5a() {
    let data = util.ReadFile('/data/Day5.txt');

    let ceil = 0;
        
    data.forEach(row => {
        let d = row
            .replace(/B/gi, 1)
            .replace(/F/gi, 0)
            .replace(/R/gi, 1)
            .replace(/L/gi, 0);
        let num = parseInt(d, 2)
        

        if(num > ceil) {
            ceil = num
        }

    })

    console.log(ceil)

}

function day4b() {
    let data = util.ReadFile('/data/Day4.txt', '\n\n');
    let count = 0
    data.forEach(row => {
        let p = new passport()
        p.build(row.split(/\n| /))
        if(p.isValid()) {
            count ++
        }
    })

    console.log(count)

}

function day4a() {
    let data = util.ReadFile('/data/Day4.txt', '\n\n');
    let count = 0
    data.forEach(row => {
        let p = row.split(/\n| /)
        if(day4Passport.IsValidPassport(p)) {
            count ++
        }
    })

    console.log(count)
}

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

