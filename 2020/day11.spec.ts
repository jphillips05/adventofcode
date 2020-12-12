import { Seats, SeatEnum } from './day11Seats'

describe('Seats', () => {
    let seat;
    beforeAll(() => {
        seat = new Seats()
    })

    test('build array', () => {
        let testData = 
       `LLLLL
        LLLLL
        LLLLL`
        
        let arr = seat.buildArray(testData)
        expect(arr.length === 3).toBeTruthy()
        expect(arr[0].length === 5).toBeTruthy()
    })

    test('does nothing when floor', () => {
let testData = 
`LLL
L.L
LLL`
        let arr = seat.buildArray(testData)
        expect(seat.getNewState(arr, 1, 1) === SeatEnum.floor).toBeTruthy()
    })

    test('flips seat when none around are occupied', () => {
let testData = 
`LLL
LLL
LLL`

        let arr = seat.buildArray(testData)
        expect(seat.getNewState(arr, 1, 1) === SeatEnum.taken).toBeTruthy()

    })

    test('occupied 4 + around',() => {
let testData = 
`L##
L##
LL#`
        let arr = seat.buildArray(testData)
        expect(seat.getNewState(arr, 1, 1) === SeatEnum.free).toBeTruthy()
    })

    test('occupied 4 - around',() => {
let testData = 
`L##
L##
LLL`
        let arr = seat.buildArray(testData)
        expect(seat.getNewState(arr, 1, 1) === SeatEnum.taken).toBeTruthy()
    })
})