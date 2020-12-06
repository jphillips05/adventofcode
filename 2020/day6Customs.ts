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