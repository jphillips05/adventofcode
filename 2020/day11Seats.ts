export class Seats {

    constructor() {
    }

    runFullSet(data: Array<SeatEnum>) {
        let count = 0;
        let next = data
        let run = []
        while (next.length > 0) {
            run = this.run(next)
            if (run[1] > 0) {
                count++
                next = run[0]
            } else {
                next = []
            }
        }

        console.log(`finish => ${count}, taken => ${run[2]}`)
    }

    run(data): [nextArray: Array<SeatEnum>, delta: number, occupiedCount: number] {

        let next = JSON.parse(JSON.stringify(data))
        let dCount = 0
        let oCount = 0
        for (let y = 0; y < data.length; y++) {
            for (let x = 0; x < data[0].length; x++) {
                let newState = this.getNewState(data, x, y)
                next[y][x] = newState
                if (data[y][x] !== next[y][x]) dCount++
                if (newState === SeatEnum.taken) oCount++
            }
        }

        return [next, dCount, oCount]
    }

    buildArray = (data: string) => {
        let arr = []
        data.split('\n').forEach(r => arr.push(r.split('')))
        return arr
    }


    //need to ignore .
    //i and j need to be a function that gets the next seat in the direction
    // array gits filled with either full/empty seat

    getNewState(data, x, y) {
        //seat is empty switch
        let currentState: SeatEnum = data[y][x]
        if (currentState === SeatEnum.floor) return SeatEnum.floor

        let o = this.suroundingSeats(data, x, y);

        if (currentState === SeatEnum.free) {
            if (o.indexOf(SeatEnum.taken) === -1) {
                return SeatEnum.taken
            }
        }

        if (currentState === SeatEnum.taken) {
            if (o.filter(s => s === SeatEnum.taken).length >= 5) {
                return SeatEnum.free
            }
        }

        return currentState
    }

    suroundingSeats(data, x: number, y: number) {
        let o = []
        for (let i = 0; i <= 8; i++) {
            let nextSeat = this.getNextSeat(data, x, y, i)
            if (nextSeat) {
                o.push(nextSeat)
            }
        }

        return o
    }

    getNextSeat(data, x, y, i) {
        let nextCoords = this.getNextCoords(x, y, i)
        try {
            if (!nextCoords) return
            if (nextCoords[0] < 0 || nextCoords[1] < 0) return
            if (nextCoords[0] > data[0].length - 1 || nextCoords[1] > data.length - 1) return
            if (data[nextCoords[1]][nextCoords[0]] === SeatEnum.floor) {
                return this.getNextSeat(data, nextCoords[0], nextCoords[1], i)
            }

            return data[nextCoords[1]][nextCoords[0]]
        }
        catch (err) {
            console.log(err)
        }
    }

    getNextCoords(x, y, i) {
        switch (i) {
            case Nautical.N:
                return [x, y - 1]
            case Nautical.NE:
                return [x + 1, y - 1]
            case Nautical.E:
                return [x + 1, y]
            case Nautical.SE:
                return [x + 1, y + 1]
            case Nautical.S:
                return [x, y + 1]
            case Nautical.SW:
                return [x - 1, y + 1]
            case Nautical.W:
                return [x - 1, y]
            case Nautical.NW:
                return [x - 1, y - 1]
        }
    }

}

export enum SeatEnum {
    floor = '.',
    taken = '#',
    free = 'L'
}

export enum Nautical {
    N = 0,
    NE = 1,
    E = 2,
    SE = 3,
    S = 4,
    SW = 5,
    W = 6,
    NW = 7
}




// let s = new Seats()
// //3994
// let data = s.buildArray(Util.ReadFile('/data/Day11.txt', false))
// // let data = s.buildArray(testData)
// // s.getNewState(data, 0, 1)
// //console.log(s.getNewState(data, 1,0))
// s.runFullSet(data)