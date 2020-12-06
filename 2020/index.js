const Day2 = require('./day2')
const util = require('./util.js')
const Dat3Slope = require('./day3Slope');
const day3Slope = require('./day3Slope');
const passport = require('./day4Passport')
const customs = require('./day6Customs')


day6b()

function day6b() {
    let count = 0
    let data = util.ReadFile('/data/Day6.txt', '\n\n').forEach(row => {
        let charsArr = row.split('\n')
        count = count + customs.countAllYes(charsArr)
    });

    console.log(count)

}

function day6a() {
    let count = 0
    let data = util.ReadFile('/data/Day6.txt', '\n\n').forEach(row => {
        let yesarr = []
        let chars = row.split('\n').join('')
        count = count + customs.countYes(chars)
    });
}

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