const customs = require('./day6Customs')

describe('Day 6 Customs', () => {
    test('count yes', () => {
        expect(customs.countYes('aabc') === 3)
        expect(customs.countYes('abc') === 3)
    })
    test('count all', () => {
        expect(customs.countAllYes(['abc']) === 3)
        expect(customs.countAllYes(['a', 'b', 'c']) === 0)
        expect(customs.countAllYes(['ab', 'ac']) === 1)
        expect(customs.countAllYes(['a', 'a', 'a', 'a']) === 1)
        expect(customs.countAllYes(['b']) === 1)

    })
})