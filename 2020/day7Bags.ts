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

    static CountBag(bagName: string, data, keys?) {
        Object.keys(data).forEach(key => {
            if(data[key].indexOf(bagName)> -1) {
                if(!keys) keys = []
                if(keys.indexOf(key) === -1) keys.push(key)
                console.log(`${bagName} in =>`, key)
                this.CountBag(key, data, keys);
            }
        });

        return keys.length
    }
}