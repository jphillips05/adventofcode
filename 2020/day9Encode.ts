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

        this.run()
    }

    run = () => {
        this.processing = true
        while(this.processing) {
            let data = this.getDataSet()
            this.checkSum(data, this.peek())
            this.start ++
            this.end ++
        }

        console.log(`invalid => ${this.erroNum}`)

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

    peek = () => parseInt(this.data[this.end])

}