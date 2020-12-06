module.exports = {
    
    countYes: (chars) => {
        let yesArr = []
        for(char of chars) {
            yesArr[char] = 1
        }
        return Object.keys(yesArr).length
    },

    countAllYes: (charsArr) => {
        let yesArr = []
        charsArr.forEach(chars => {
            for(char of chars) {
                yesArr[char] = (yesArr[char] || 0) + 1
            }
        })

        return Object.values(yesArr).filter(o => o == charsArr.length).length
    }
}