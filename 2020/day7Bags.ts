export class Bags {
    GetBagCount = (bagName: string, bagTree:[] ): number => {

        let count = 0
        bagTree.forEach(bagList => {

        })

        return 0
    }

    static FormatBagName = (bagString: string): string => {
        return bagString.substring(0, bagString.lastIndexOf(' '))
    }

    static BuildChildModel(name: string) {
        let formatArr = name.split(' ')
        let value = formatArr.shift();
        formatArr.pop()
        if(isNaN(parseInt(value))) return [{}] 
        return { key: formatArr.join(' '), value: parseInt(value) || 0 }
    }

    static BuildBagArray = (data) => {
        let bagHash = []
        data.forEach(row => {
            let allBags = row.split(' contain ');
            let topBag = Bags.FormatBagName(allBags.shift())
            allBags[0].split(', ').forEach(b => {
                bagHash[topBag] = bagHash[topBag] || [] 
                if(!isNaN(parseInt(b.substring(0,1)))) {
                    b = b.substring(2, b.length-1)
                    bagHash[topBag].push(Bags.FormatBagName(b))
                }
            })
        })
        return bagHash;
    }

    static BuildBagFullArray(data) {
        let bagHash = []
        data.forEach(row => {
            row.split(/ bags contain |, /)
                .forEach((column, idx, arr) => {
                    if(idx === 0) {
                        bagHash[column] = [];
                    } else {
                        if(column !== 'no other bags.') {
                            bagHash[arr[0]].push(this.BuildChildModel(column))
                        }
                    }
                });
        })
        console.log(bagHash)
        return bagHash;
    }

    static CountBag(bagName: string, data, keys?) {
        Object.keys(data).forEach(key => {
            if(data[key].indexOf(bagName)> -1) {
                if(!keys) keys = []
                if(keys.indexOf(key) === -1) keys.push(key)
                this.CountBag(key, data, keys);
            }
        });

        return keys.length
    }

   
    static CountBagsIn(bagName: string, data) {
        if(!data[bagName]) return
        let count = 0;
        data[bagName].forEach(bag => {
            count = count + bag.value
            let val = 0
            this.GetNextNode(bag.key, data).forEach(n => {
                val = val + n.value
            })

            console.log(bag.value)
            count = count + (val*bag.value)
            
        });
        
    }

    static GetNextNode(name, data) {
        if(!data[name]) return
        return data[name]
    }
}
