import {expect, test, describe} from '@jest/globals';

import { Bags } from './day7Bags'

let testData = 
`shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.`

describe('bags', () => {
    test('format keys', () => {
        expect(Bags.FormatBagName('light red bags') === 'light red').toBeTruthy()
        expect(Bags.FormatBagName('light red bag') === 'light red').toBeTruthy()
    })

    // test('build bag array', () => {
    //     let arr = Bags.BuildBagArray(testData.split('\n'))
    //     expect(Object.keys(arr).indexOf('light red') > -1)
    //     expect(arr['light red'].length === 2)
    //     expect(arr['dotted black'].length === 0)
    // })

    // test('counts bags', () => {
    //     let arr = Bags.BuildBagArray(testData.split('\n'))
    //     expect(Bags.CountBag('shiny gold', arr) === 4)
    // })

    test('count bags in bags', () => {
        let arr = Bags.BuildBagFullArray(testData.split('\n'))
        //console.log(arr)
        // expect(Bags.CountBagsIn('does not exist', arr) === 0).toBeTruthy()
        // expect(Bags.CountBagsIn('shiny gold', arr) === 3).toBeFalsy()
        // expect(Bags.CountBagsIn('shiny gold', arr) === 3).toBeTruthy()
    })

})
