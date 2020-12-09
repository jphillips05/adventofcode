export class Game {
    numVal: number = 0 
    data = []
    idx: number = 1
    continue: boolean = true
    checked = []
    flip = -1

    constructor(data) {
        this.data = this.transformData(data)
        //for(let i = 0; i < this.data.length; i++) {
            this.run()
        //}
    }

    transformData = (data)  => data.map(row => row.split(' '))


    jmp = (value:string) => {
        let num = new Number(value).valueOf()
        this.idx += num
    }

    acc = (value: string) => {
        let num = new Number(value).valueOf()
        this.numVal += num
        this.idx ++
    }

    nop = () => { 
        this.idx ++
    } 

    run = () => {
        while(this.checked.indexOf(this.idx) === -1){
            this.exec()
        }

        console.log(`finish => ${this.numVal}`)

    }

    exec = () => {

        if(this.checked.indexOf(this.idx) > -1) {
            return
        }

        this.checked.push(this.idx)

        let action = this.getAction(this.data[this.idx][0])
        // if(action !== this.data[this.idx][0] && this.idx > this.flip) {
        //     this.flip = this.idx
        // }
        
        switch(action) {
            case 'nop': return this.nop()
            case 'jmp': return this.jmp(this.data[this.idx][1])
            case 'acc': return this.acc(this.data[this.idx][1])
        }
    }

    getAction = (action) => {
        return action
        if(action === 'nop') return 'jpm'
        if(action === 'jmp') return 'nop'
        return action
    }

    reset = () => {
        this.idx = 0
        this.checked = []
    }
}