export class Customs {
    
    static countYes = (chars: string): number => {
        let yesArr: string[] = []
        for(let char of chars) {
            yesArr[char] = 1
        }
        return Object.keys(yesArr).length
    }

    static countAllYes = (charsArr: string[]): number => {
        let yesArr = []
        charsArr.forEach(chars => {
            for(let char of chars) {
                yesArr[char] = (yesArr[char] || 0) + 1
            }
        })

        return Object.values(yesArr).filter(o => o == charsArr.length).length
    }
}


// function day6b() {
//     let count:number = 0
//     Util.ReadFile('/data/Day6.txt', '\n\n').forEach((row: string) => {
//         let charsArr:string[] = row.split('\n')
//         count = count + Customs.countAllYes(charsArr)
//     });

//     console.log(count)

// }

// function day6a() {
//     let count = 0
//     Util.ReadFile('/data/Day6.txt', '\n\n').forEach(row => {
//         let chars = row.split('\n').join('')
//         count = count + Customs.countYes(chars)
//     });
// }