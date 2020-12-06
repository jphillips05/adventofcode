
module.exports = {

    buildModel: (row) => {
        let arr = row.split(' ')

        return {
            Min: parseInt(arr[0].split('-')[0]),
            Max: parseInt(arr[0].split('-')[1]),
            Letter: arr[1].substring(0,1),
            Password: arr[2].split('')
        }
    },

    isValidCount: (instanceNum, min, max) => {
        return instanceNum >= min && instanceNum <= max 
    },

    isValidIndexCount: (letter, password, min, max) => {
        return password[min-1] === letter ^ password[max-1] === letter
    },

    countInstanceOf: (letter, arr) => arr.reduce((counter,current) => (letter === current ? counter + 1 : counter),0)

}

// function day2b() {
//     let count = 0
//     util.ReadFile('./data/Day2.txt')
//         .forEach(row => {
//             let model = Day2.buildModel(row)
//             if(Day2.isValidIndexCount(model.Letter, model.Password, model.Min, model.Max)) {
//                 count ++
//             }
//         })

//     console.log(count);
// }

// function day2a() {
//     let count = 0
//     util.ReadFile('./data/Day2.txt')
//         .forEach(row => { 
//             let model = Day2.buildModel(row)
//             let instanceNum = Day2.countInstanceOf(model.Letter, model.Password)
//             if(Day2.isValidCount(instanceNum, model.Min, model.Max)) {
//                 count ++
//             }
//         })
    
//     console.log(count)
// }
