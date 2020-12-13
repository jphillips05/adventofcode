import { NauticalDirection } from './day12Nautical'

describe('Nautical', () => {
    describe('direction', () => {
        test('it moves E', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'F', Value: 1})
            expect(coords.Coords).toStrictEqual([1,0])
            expect(coords.Facing).toStrictEqual('E')
        })
    
        test('it moves w', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'W', Coords: [0, 0]}, {Action: 'F', Value: 1})
            expect(coords.Coords).toStrictEqual([-1, 0])
            expect(coords.Facing).toStrictEqual('W')
        })
    
        test('it moves n', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'F', Value: 1})
            expect(coords.Coords).toStrictEqual([0, -1])
            expect(coords.Facing).toStrictEqual('N')
        })
    
        test('it moves s', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'S', Coords: [0, 0]}, {Action: 'F', Value: 1})
            expect(coords.Coords).toStrictEqual([0, 1])
            expect(coords.Facing).toStrictEqual('S')
        })
    })

    describe('specific direction', () => {
        test('it moves in specific direction N', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'N', Value: 1})
            expect(coords.Coords).toStrictEqual([0, -1])
            expect(coords.Facing).toStrictEqual('E')
    
        })
    
        test('it moves in specific direction S', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'S', Value: 1})
            expect(coords.Coords).toStrictEqual([0, 1])
            expect(coords.Facing).toStrictEqual('E')
    
        })
    
        test('it moves in specific direction E', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'E', Value: 1})
            expect(coords.Coords).toStrictEqual([1, 0])
            expect(coords.Facing).toStrictEqual('E')
    
        })
    
        test('it moves in specific direction W', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'W', Value: 1})
            expect(coords.Coords).toStrictEqual([-1, 0])
            expect(coords.Facing).toStrictEqual('E')
    
        })
    })

    describe('rotate', () => {
        test('right 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'R', Value: 90})
            expect(coords.Facing).toStrictEqual('E')
        })

        test('right 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'R', Value: 90})
            expect(coords.Facing).toStrictEqual('S')
        })

        test('right 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'S', Coords: [0, 0]}, {Action: 'R', Value: 90})
            expect(coords.Facing).toStrictEqual('W')
        })

        test('right 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'W', Coords: [0, 0]}, {Action: 'R', Value: 90})
            expect(coords.Facing).toStrictEqual('N')
        })



        test('left 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'L', Value: 90})
            expect(coords.Facing).toStrictEqual('W')
        })

        test('left 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'W', Coords: [0, 0]}, {Action: 'L', Value: 90})
            expect(coords.Facing).toStrictEqual('S')
        })

        test('left 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'S', Coords: [0, 0]}, {Action: 'L', Value: 90})
            expect(coords.Facing).toStrictEqual('E')
        })

        test('left 90', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'L', Value: 90})
            expect(coords.Facing).toStrictEqual('N')
        })


        test('right 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'R', Value: 180})
            expect(coords.Facing).toStrictEqual('S')
        })

        test('right 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'S', Coords: [0, 0]}, {Action: 'R', Value: 180})
            expect(coords.Facing).toStrictEqual('N')
        })

        test('right 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'L', Value: 180})
            expect(coords.Facing).toStrictEqual('S')
        })

        test('right 180', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'S', Coords: [0, 0]}, {Action: 'L', Value: 180})
            expect(coords.Facing).toStrictEqual('N')
        })

        test('right 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'R', Value: 270})
            expect(coords.Facing).toStrictEqual('W')
        })


        test('left 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'N', Coords: [0, 0]}, {Action: 'L', Value: 270})
            expect(coords.Facing).toStrictEqual('E')
        })

        test('right 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'R', Value: 270})
            expect(coords.Facing).toStrictEqual('N')
        })


        test('left 270', () => {
            const n = new NauticalDirection()
            let coords = n.exec({Facing: 'E', Coords: [0, 0]}, {Action: 'L', Value: 270})
            expect(coords.Facing).toStrictEqual('S')
        })

        
    })

    test('random', () => {
        const n = new NauticalDirection()
        let coords = n.exec({Facing:"W", Coords:[376,130]}, {Action:"F",Value:54})
        expect(coords.Coords).toStrictEqual([322,130])

    })

})