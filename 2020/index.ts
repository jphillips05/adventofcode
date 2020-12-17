import { Util } from './Util'

// let testData = 
// `class: 0-1 or 4-19
// row: 0-5 or 8-19
// seat: 0-13 or 16-19

// your ticket:
// 11,12,13

// nearby tickets:
// 2,3,20
// 3,9,18
// 15,1,5
// 5,14,9`

let testData = Util.ReadFile('/data/Day16.txt', false)
let data = testData.split('\n\n')

let allValid = []
let validRangeVals: Map<string, number[]> = new Map<string, number[]>()


data[0].split('\n').forEach(r => {
    //let c = r.split('departure ')[1]
    let parts = r.split(':')
    
    let rang = []
    parts[1].match(/\d{1,9}-\d{1,9}/ig).forEach(r => {
        let ra = r.split('-')
        range(parseInt(ra[0]), parseInt(ra[1])).forEach(c => {
            if(parseInt(c) && !rang.includes(parseInt(c))) {
                rang.push(parseInt(c))
            }
        })
    })

    allValid = allValid.concat(rang)
    validRangeVals.set(parts[0], rang)
})

let ticketData = {}
data.slice(1, data.length).forEach(ticket => {
    let d = ticket.split(':\n')
    ticketData[d[0]] = d[1]
        .split('\n')
        .map(r => r.split(',')
        // .reduce((p,c, idx) => {
        //     if(!isNaN(parseInt(c)) && allValid.includes(parseInt(c))) {  //********************only push when whole array is valid********************
        //         p.push(parseInt(c))
        //     } else {
        //         p.push(0)
        //     }
        //     return p
        // }, [])
    )
});

//validate tickets then add ours
ticketData['nearby tickets'] = ticketData['nearby tickets'].reduce((p, c) => {
    //check each value is valid
    for(let j = 0; j < c.length; j++) {
        if(!allValid.includes(parseInt(c[j]))) {
            return p
        }
    }
    //push array if tru
    p.push(c)
    return p
},[])
ticketData['nearby tickets'].push(ticketData['your ticket'][0])


let notanswer: Map<string, number[]> = new Map<string, number[]>()

//validate
validRangeVals.forEach((r, key) => {
    notanswer.set(key, [])
    //each col
    for(let i = 0; i < ticketData['your ticket'][0].length; i++) {
        //each row in nearby
        let c = 0
        for(let j = 0; j < ticketData['nearby tickets'].length; j++) {
            //if range not include continue
            if(!r.includes(parseInt(ticketData['nearby tickets'][j][i]))) {
                if(!notanswer.get(key).includes(i)) notanswer.get(key).push(i)
            }
        }
    }
})

let possibilities = range(0,19)
let answer: Map<string,number> = new Map<string, number>()
let sorted = new Map([...notanswer.entries()].sort((a,b) => b[1].length - a[1].length))
sorted.forEach((r, key) => {
    for(let i = 0; i < possibilities.length; i++) {
        if(r.indexOf(possibilities[i]) === -1) {
            answer.set(key, possibilities[i])
            possibilities.splice(i, 1)
        }
    }
})

console.log([...answer.entries()].filter(r => r[0].indexOf('departure') > -1).reduce((p,c) => ticketData['your ticket'][0][c[1]]*p, 1))

//ignore invalid

function isVaid(number:number, ranges:Map<string, number[]>) {
    ranges.forEach(range => {
        if(!range.includes(number)) return false
    });

    return true
}

// for(let a of answer) {
//     answerInt = answerInt*parseInt(ticketData['your ticket'][0][a])
// }

// console.log(answerInt)

function range(start, end) {
    return new Array(end - start + 1).fill(null).map((_, idx) => start + idx)
}







// let testData = 
// 1789,37,47,1889`

// let testData = Util.ReadFile('/Data/Day13.txt', false)
// let data = testData.split('\n')
// let startTime = 100000000000000 // parseInt(data[0])
// let validBus: any[] = data[1].split(',').map(b => !isNaN(parseInt(b)) ? parseInt(b) : b)

// // let validBus: any[] = [7,13,'x','x',59,'x',31,19]
// // let startTime = 1068780

// let t = startTime
// while(!checkNextBus(t, 0, validBus)) {
//     t++
//     console.log('running', t)
// }

// console.log(`finish => ${t}`)

// function checkNextBus(start, busIndex, busList) {
//     if(!busList[busIndex]) return false //if does not exist retur false

//     //break
//     if(start%busList[busIndex] === 0 && busIndex === busList.length -1) return true

//     if(start%busList[busIndex] === 0 || busList[busIndex] === 'x') {
//         return checkNextBus(start+1, busIndex+1, busList)
//     }

//     //all false
//     return false
// }

// //runBus(start, validBus)
// function runBus(start, validBus) {
//     let run = true
//     let time = start
//     while(run) {
//         time ++
//         for(let i = 0; i < validBus.length; i++) {
//             if(time%validBus[i]===0) {
//                 console.log(`finish => ${(time-start)*validBus[i]}`)
//                 run = false
//                 break
//             }
//         }

//     }

// }

// let testData = 
// `light red bags contain 1 bright white bag, 2 muted yellow bags.
// dark orange bags contain 3 bright white bags, 4 muted yellow bags.
// bright white bags contain 1 shiny gold bag.
// muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
// shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
// dark olive bags contain 3 faded blue bags, 4 dotted black bags.
// vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
// faded blue bags contain no other bags.
// dotted black bags contain no other bags.`

// let test2 = 
// `shiny gold bags contain 2 dark red bags.
// dark red bags contain 2 dark orange bags.
// dark orange bags contain 2 dark yellow bags.
// dark yellow bags contain 2 dark green bags.
// dark green bags contain 2 dark blue bags.
// dark blue bags contain 2 dark violet bags.
// dark violet bags contain no other bags.`

//day7b()

// function day7b() {
//     let data = testData.split('\n')
//     let bagHash = Bags.BuildBagFullArray(data)
//     Bags.CountBagsIn('shiny gold', bagHash)
// }

// //378
// function day7a() {
//     let data = Util.ReadFile('/data/Day7.txt');
//     let bagHash = Bags.BuildBagArray(data)
//     let count = Bags.CountBag('shiny gold', bagHash)

//     console.log(count)

// }


//676
// function day5b() {
//     let data = Util.ReadFile('/data/Day5.txt');

//     let seats = [];
        
//     data.forEach(row => {
//         let d = row
//             .replace(/B/gi, '1')
//             .replace(/F/gi, '0')
//             .replace(/R/gi, '1')
//             .replace(/L/gi, '0');
//         seats.push(parseInt(d, 2))

//     });

//     seats = seats.sort((a,b)=>a-b)

//     for(let i = seats[0]; i < seats.length-1; i++) {
//         if(seats[i] + 1 === seats[i+1]) {
//             continue
//         }

//         console.log(seats[i]+1)
//     }

// }


// function day5a() {
//     let data = Util.ReadFile('/data/Day5.txt');

//     let ceil = 0;
        
//     data.forEach(row => {
//         let d = row
//             .replace(/B/gi, '1')
//             .replace(/F/gi, '0')
//             .replace(/R/gi, '1')
//             .replace(/L/gi, '0');
//         let num = parseInt(d, 2)
        

//         if(num > ceil) {
//             ceil = num
//         }

//     })

//     console.log(ceil)

// }