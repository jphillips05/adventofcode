
export class NauticalDirection {

    exec(currentPosition: Position, instruction: Instruction) {
        let retVal:Position
        if (Move[instruction.Action] !== undefined) retVal = this.move(currentPosition, instruction, currentPosition.Facing)
        if (Nautical[instruction.Action] !== undefined) retVal = this.move(currentPosition, instruction, instruction.Action)
        if(Rotate[instruction.Action] !== undefined) retVal = this.rotate(currentPosition, instruction)
        return retVal
    }

    move(currentPosition: Position, instruction: Instruction, direction): Position {
        return {
            Facing: currentPosition.Facing,
            Coords: [
                currentPosition.Coords[0] + (this.Nautical[direction][0] * instruction.Value),
                currentPosition.Coords[1] + (this.Nautical[direction][1] * instruction.Value)
            ]
        }
    }

    rotate(currentPosition: Position, instruction: Instruction) : Position {
        let dir
        let val = instruction.Value
        if(Rotate[instruction.Action] === Rotate.L) {
            val = val * -1
        }

        let curr = Nautical[currentPosition.Facing]
        let next = curr + val

        if(next < 0) {
            next += 360
        }

        if(next >= 360) {
            next -=360
        }


        return {
            Facing: Nautical[next],
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
    Facing: string,
    Coords: [number, number]
}

export enum Rotate {
    L, R
}

export enum Move {
    F, B
}

