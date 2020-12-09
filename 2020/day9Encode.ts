import { cursorTo } from "readline"

export class Encode {
    
    data = []
    start = 0
    end = 0
    processing = false
    preamble = 0
    erroNum = 0

    constructor(preamble, data) {
        this.data = data
        this.end = preamble
        this.preamble = preamble

        let error = this.getError()
        this.start = 0
        this.end = 1
        this.findContig(error)
    }

    findContig = (erroNum) => {
        this.processing = true
        let data = []
        while(this.processing) {
            data = this.getDataSet()

            if(this.sum(data) < erroNum) {
                this.end ++
            } else if(this.sum(data) > erroNum) {
                this.start ++
                this.end = this.start + 1
            } else {
                this.processing = false
            }
        }

        let set = data.sort((a,b) => a-b)
        console.log(`answer => ${set[0] + set[set.length-1]}`)

    }

    getError = (): number => {
        this.processing = true
        while(this.processing) {
            let data = this.getDataSet()
            this.checkSum(data, this.peek())
            this.start ++
            this.end ++
        }

        console.log(`invalid => ${this.erroNum}`)
        return this.erroNum

    }

    getDataSet = () => {
        return this.data.slice(this.start, this.end).map(n => parseInt(n))
    } 

    checkSum(data, next) {
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data.length; j++) {
                if(data[i] !== data[j] && data[i] + data[j] === next) {
                    this.processing = true
                    return
                }
            }
        }

        this.erroNum = next
        this.processing = false
    }

    sum = (data: Array<number>): number => data.reduce((rev, cur) => rev += cur)

    peek = () => parseInt(this.data[this.end])

}