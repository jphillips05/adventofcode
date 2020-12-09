import {expect, test, describe} from '@jest/globals';

import { Game } from './day8Game'

let game: Game

let testdata = 
`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

beforeAll(() => {
    game = new Game(testdata.split('\n'))
})

describe('game', () => {
    
    // beforeEach(() => {
    //     game.reset()
    // })

    // test('jmp',() => {
    //     game.jmp('+1')
    //     expect(game.idx === 1).toBeTruthy()
    //     game.jmp('-1')
    //     expect(game.idx === 0).toBeTruthy()
    // })

    // test('reset', () => {
    //     game.jmp('+2')
    //     game.reset()
    //     expect(game.idx === 0).toBeTruthy()
    //     expect(game.numVal === 0).toBeTruthy()
    // })

    // test('nop', () => {
    //     game.jmp('+1')
    //     game.nop()
    //     console.log(game.idx)
    //     expect(game.idx === 3).toBeTruthy()
    // })

    // test('run', () => {
    //     game.run()
    //     expect(game.numVal === 5).toBeTruthy()
    // })

})
