
export class NauticalDirection {

    exec(currentPosition: Position, instruction: Instruction) {
        let retVal:Position
        if (Move[instruction.Action] !== undefined) { 
            retVal = currentPosition
            for(let i = 0; i < instruction.Value; i++) {
                retVal = this.move(retVal, instruction)
            }
         }
        if (Nautical[instruction.Action] !== undefined) retVal = this.moveWaypoint(currentPosition, instruction, instruction.Action)
        if (Rotate[instruction.Action] !== undefined) retVal = this.rotate(currentPosition, instruction)
        return retVal
    }

    move(currentPosition: Position, instruction: Instruction): Position {
        return {
            Waypoint:currentPosition.Waypoint,
            Coords: [
                currentPosition.Waypoint[0] + currentPosition.Coords[0],
                currentPosition.Waypoint[1] + currentPosition.Coords[1]
            ]
        }
    }

    moveWaypoint(currentPosition: Position, instruction: Instruction, direction): Position {
        return {
            Waypoint: [
                currentPosition.Waypoint[0] + (this.Nautical[direction][0] * instruction.Value),
                currentPosition.Waypoint[1] + (this.Nautical[direction][1] * instruction.Value)
            ],
            Coords: currentPosition.Coords
        }
    }

    rotate(currentPosition: Position, instruction: Instruction) : Position {
        let times = instruction.Value/90
        let next:[number, number] = currentPosition.Waypoint

        for(let r in Array(times).fill(null)) {
            if(Rotate[instruction.Action] === Rotate.L) {
                next = [next[1], next[0]*-1]
            } else {
                next = [next[1]*-1, next[0]]
            }
        }

        return {
            Waypoint: next,
            Coords: currentPosition.Coords
        }

    }

    getInstructions(data): Array<Instruction> {
        return data.split('\n').map(r => {
            return {
                Action: r.substring(0, 1),
                Value: parseInt(r.substring(1, r.length))
            }
        })
    }

    get Nautical(): { [index: string]: Array<number> } {
        return {
            'N': [0, -1],
            'E': [1, 0],
            'S': [0, 1],
            'W': [-1, 0]
        }
    }
}

export enum Nautical {
    N = 0,
    E = 90,
    S = 180,
    W = 270,
}


export interface Instruction {
    Action: string,
    Value: number
}

export interface Position {
    Waypoint: [number, number] 
    Coords: [number, number]
}

export enum Rotate {
    L, R
}

export enum Move {
    F, B
}

