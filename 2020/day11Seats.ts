export class Seats {

    constructor() { 
    }

    runFullSet(data:Array<SeatEnum>) {
        let count = 0;
        let next = data
        let run = []
        while(next.length > 0) {
            run = this.run(next)
            if(run[1] > 0) {
                count++
                next = run[0]
            } else {
                next = []
            }
        }

        console.log(`finish => ${count}, taken => ${run[2]}`)
    }

    run(data: Array<SeatEnum>): [nextArray: Array<SeatEnum>, delta:number, occupiedCount: number] {
        
        let next = [];
        let dCount = 0
        let oCount = 0
        for(let y=0; y <data.length; y++) {
            let row = []
            for(let x = 0; x < data[0].length; x++) {
                let newState = this.getNewState(data, y, x) 
                if(data[y][x] !== newState) dCount ++
                if(data[y][x] === SeatEnum.taken) oCount ++
                row.push(newState)
            }
            next.push(row)
        }

        return [next,dCount, oCount]
    }

    buildArray = (data:string) => { 
        let arr = []
        data.split('\n').forEach(r => arr.push(r.split('')))
        return arr
    }


    //need to ignore .
    //i and j need to be a function that gets the next seat in the direction
    // array gits filled with either full/empty seat

    getNewState(data, x,y) {
        //seat is empty switch
        let currentState:SeatEnum = data[x][y]
        if(currentState === SeatEnum.floor) return SeatEnum.floor

        let o = []
        let i = -1
        while(i<=1) {
            let j = -1
            while(j <= 1) {
                if(data[x+i] && data[y+j]) {
                    if(i!==0 || j!==0) {
                        o.push(data[x+i][y+j])
                    }
                }
                j++
            }
            i++
        }

        if(currentState === SeatEnum.free) {
            if(o.indexOf(SeatEnum.taken) === -1) {
                return SeatEnum.taken
            }
        }

        if(currentState === SeatEnum.taken) { 
            if(o.filter(s => s === SeatEnum.taken).length >= 4) {
                return SeatEnum.free
            }
        }

        return currentState
    }

    getNextSeat(data,x,y,dir) {
        
    }

}

export enum SeatEnum {
    floor = '.',
    taken = '#',
    free = 'L'
}

