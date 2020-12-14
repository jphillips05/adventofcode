import { NauticalDirection } from './day12Nautical'

describe('Nautical', () => {
    describe('moves', () => {
        test('it moves E', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-1]}, {Action: 'F', Value: 10})
            expect(coords.Coords).toStrictEqual([100, -10])
            coords = n.exec({ Coords: [0, 0], Waypoint: [10,-1]}, {Action: 'F', Value: 100})
            expect(coords.Coords).toStrictEqual([1000, -100])
           
        })
    
    })

    describe('specific direction', () => {
        test('it moves in specific direction N', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [0,0]}, {Action: 'N', Value: 1})
            expect(coords.Waypoint).toStrictEqual([0, -1])
            expect(coords.Coords).toStrictEqual([0, 0])
    
        })
    
        test('it moves in specific direction S', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [0,0]}, {Action: 'S', Value: 1})
            expect(coords.Waypoint).toStrictEqual([0, 1])
            expect(coords.Coords).toStrictEqual([0, 0])
    
        })
    
        test('it moves in specific direction E', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [0,0]}, {Action: 'E', Value: 1})
            expect(coords.Waypoint).toStrictEqual([1, 0])
            expect(coords.Coords).toStrictEqual([0, 0])
    
        })
    
        test('it moves in specific direction W', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [0,0]}, {Action: 'W', Value: 1})
            expect(coords.Waypoint).toStrictEqual([-1, 0])
            expect(coords.Coords).toStrictEqual([0, 0])
    
        })
    })

    describe('rotate', () => {
        test('right 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'R', Value: 90})
            expect(coords.Waypoint).toStrictEqual([4,10])
        })

        test('right 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'R', Value: 180})
            console.log(coords.Waypoint)
            expect(coords.Waypoint).toStrictEqual([-10,4])
        })

        test('right 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'R', Value: 270})
            expect(coords.Waypoint).toStrictEqual([-4, -10])
        })

        test('left 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'L', Value: 90})
            expect(coords.Waypoint).toStrictEqual([-4,-10])
        })

        test('left 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'L', Value: 180})
            expect(coords.Waypoint).toStrictEqual([-10,4])
        })

        test('left 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-4]}, {Action: 'L', Value: 270})
            expect(coords.Waypoint).toStrictEqual([4,10])
        })
        
    })

    test('test the sample data', () => {
        const n = new NauticalDirection()
        let coords = n.exec({ Coords: [0, 0], Waypoint: [10,-1]}, {Action: 'F', Value: 10})
        expect(coords.Coords).toStrictEqual([100,-10])
        expect(coords.Waypoint).toStrictEqual([10,-1])
        coords = n.exec({ Coords: coords.Coords, Waypoint: coords.Waypoint}, {Action: 'N', Value: 3})
        expect(coords.Coords).toStrictEqual([100,-10])
        expect(coords.Waypoint).toStrictEqual([10,-4])
        coords = n.exec({ Coords: coords.Coords, Waypoint: coords.Waypoint}, {Action: 'F', Value: 7})
        expect(coords.Coords).toStrictEqual([170,-38])
        expect(coords.Waypoint).toStrictEqual([10,-4])
        coords = n.exec({ Coords: coords.Coords, Waypoint: coords.Waypoint}, {Action: 'R', Value: 90})
        expect(coords.Coords).toStrictEqual([170,-38])
        expect(coords.Waypoint).toStrictEqual([4,10])
        coords = n.exec({ Coords: coords.Coords, Waypoint: coords.Waypoint}, {Action: 'F', Value: 11})
        expect(coords.Coords).toStrictEqual([214,72])
        expect(coords.Waypoint).toStrictEqual([4,10])


    })

})