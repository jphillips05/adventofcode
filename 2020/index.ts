import { Util } from './Util'

let arr: Array<number> = [0,1,5,10,3,12,19]
let i = 1
let end = 2020
let hash: Map<number, number> = new Map()
arr.slice(0, arr.length-1).forEach(v => hash.set(v, i++))

let n = arr[arr.length-1]
i ++
let start = Date.now()

while(i <= end) {
    if(!hash.get(n)) {
        hash.set(n, i-1)
        n = 0
    } else {
        let diff = i-1-hash.get(n)
        hash.set(n, i-1)
        n = diff
    }
    i++
}

console.log('done', n, Date.now()-start)













// let testData = 
// `0
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

function checkNextBus(start, busIndex, busList) {
    if(!busList[busIndex]) return false //if does not exist retur false

    //break
    if(start%busList[busIndex] === 0 && busIndex === busList.length -1) return true

    if(start%busList[busIndex] === 0 || busList[busIndex] === 'x') {
        return checkNextBus(start+1, busIndex+1, busList)
    }

    //all false
    return false
}

//runBus(start, validBus)
function runBus(start, validBus) {
    let run = true
    let time = start
    while(run) {
        time ++
        for(let i = 0; i < validBus.length; i++) {
            if(time%validBus[i]===0) {
                console.log(`finish => ${(time-start)*validBus[i]}`)
                run = false
                break
            }
        }

    }

}

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