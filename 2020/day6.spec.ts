import { Customs } from './day6Customs'
import {expect, test, describe} from '@jest/globals';

describe('Day 6 Customs', () => {
    test('count yes', () => {
        expect(Customs.countYes('aabc') === 3)
        expect(Customs.countYes('abc') === 3)
    })
    test('count all', () => {
        expect(Customs.countAllYes(['abc']) === 3)
        expect(Customs.countAllYes(['a', 'b', 'c']) === 0)
        expect(Customs.countAllYes(['ab', 'ac']) === 1)
        expect(Customs.countAllYes(['a', 'a', 'a', 'a']) === 1)
        expect(Customs.countAllYes(['b']) === 1)

    })
})