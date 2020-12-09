export class Game {
    numVal: number = 0 
    data = []
    idx: number = 0
    checked = []
    switchIdxs = []
    running = false
    isSolution = false

    constructor(data) {
        this.data = this.transformData(data)
        for(let i = 0; i < this.switchIdxs.length; i++) {
            this.run(i)
            this.reset()
        }
    }

    transformData = (data)  => { 
        return data.map((row, idx) => { 
            let r = row.split(' ') 
            if(r[0] === 'nop' || r[0] === 'jmp') {
                this.switchIdxs.push(idx)
            }
            return  r
        })
    }


    jmp = (value:string) => {
        let num = new Number(value).valueOf()
        this.idx = this.idx + num
    }

    acc = (value: string) => {
        let num = new Number(value).valueOf()
        this.numVal = this.numVal + num
        this.idx = this.idx + 1
    }

    nop = () => { 
        this.idx = this.idx + 1
    } 

    run = (runId) => {
        this.running = true
        while(this.idx < this.data.length && this.running && !this.isSolution){
            this.exec(runId)
        }

        this.isSolution = this.idx === this.data.length
        if(this.isSolution) {
            console.log(`finish => ${this.numVal}, isLastLine => ${this.idx === this.data.length}`)
        }

    }

    exec = (runId) => {

        if(this.checked.indexOf(this.idx) > -1) {
            this.running = false
            return
        }

        this.checked.push(this.idx)

        let action = this.getAction(this.data[this.idx][0], runId) 
        
        switch(action) {
            case 'nop': return this.nop()
            case 'jmp': return this.jmp(this.data[this.idx][1])
            case 'acc': return this.acc(this.data[this.idx][1])
        }
    }

    getAction = (action, runId) => {
        //if not in switch check array
        if(this.switchIdxs.indexOf(this.idx) === -1) return action
        
        //if runId for switch check
        //here we check to see which of the checks we need to change
        if(this.switchIdxs[runId] === this.idx) {
            if(action === 'nop') return 'jmp'
            if(action === 'jmp') return 'nop'
        }
        return action
    }

    reset = () => {
        this.idx = 0
        this.checked = []
        this.numVal = 0
    }
}