let testData = 
`16
10
15
5
1
11
7
19
6
12
4`

let answer = []
let data = testData.split('\n')
// Util.ReadFile('/data/Day10.txt')
    .map(o => parseInt(o))
    .sort((a,b) => a-b)
    // .forEach((val, idx, arr) => {
    //     if(idx === 0) return
    //     let key = val - arr[idx-1]
    //     if(!answer[key]) answer[key]=[]
    //     answer[key].push(val)
    // })
console.log(data)

for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
        if(data[j] - data[i] <= 3) {
            answer.push([data[i], data[j]]);
        }
    }
}

function peek(i, m) {
    return answer[i+1] > m && answer[i+1]-answer[i]===1 && answer[i-1] != answer[i] && answer[i+1] !== answer[i]
}

function getMax(a,b) {
    if(!b) return a
    if(a > b) return a
    return b
}


let idx = 0
let mul = 1
let count = 1
let max = 0
// while(idx < answer.length) {
//     while(peek(idx, max)) {
//         count ++
//         idx ++
//     }
//     ///need 2 consect gtrthan before we multipl maybe push into array
//     mul = mul*count
//     count = 1
//     idx ++
//     max = getMax(max, answer[idx])
// }

while(idx < answer.length) {
    let val = answer[idx][1]
    while(!!answer[idx+1] && answer[idx+1][0] === val) {
        count ++
        idx ++
    }
    
    ///need 2 consect gtrthan before we multipl maybe push into array
    mul = mul*(count>0?count:1)
    count = 0
    idx ++
    //max = getMax(max, answer[idx])
}

console.log(`answer => ${mul}`)