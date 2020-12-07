import { Util } from './Util'
import { Bags } from './day7Bags'

let testData = 
`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`


//378
function day7a() {
    let data = Util.ReadFile('/data/Day7.txt');
    let bagHash = Bags.BuildBagArray(data)
    let count = Bags.CountBag('shiny gold', bagHash)

    console.log(count)

}


//676
function day5b() {
    let data = Util.ReadFile('/data/Day5.txt');

    let seats = [];
        
    data.forEach(row => {
        let d = row
            .replace(/B/gi, '1')
            .replace(/F/gi, '0')
            .replace(/R/gi, '1')
            .replace(/L/gi, '0');
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
    let data = Util.ReadFile('/data/Day5.txt');

    let ceil = 0;
        
    data.forEach(row => {
        let d = row
            .replace(/B/gi, '1')
            .replace(/F/gi, '0')
            .replace(/R/gi, '1')
            .replace(/L/gi, '0');
        let num = parseInt(d, 2)
        

        if(num > ceil) {
            ceil = num
        }

    })

    console.log(ceil)

}