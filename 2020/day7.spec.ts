import {expect, test, describe} from '@jest/globals';

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

describe('bags', () => {
    test('format keys', () => {
        expect(Bags.FormatBagName('light red bags') === 'light red')
        expect(Bags.FormatBagName('light red bag') === 'light red')
    })

    test('build bag array', () => {
        let arr = Bags.BuildBagArray(testData.split('\n'))
        expect(Object.keys(arr).indexOf('light red') > -1)
        expect(arr['light red'].length === 2)
        expect(arr['dotted black'].length === 0)
    })

    test('counts bags', () => {
        let arr = Bags.BuildBagArray(testData.split('\n'))
        expect(Bags.CountBag('shiny gold', arr) === 4)
    })

    test('count bags in bags', () => {
        let arr = Bags.BuildBagArray(testData.split('\n'))
        console.log(arr)
    })

})
