// module.exports = { 
    
//     IsValidPassport: (p) => {
//         if(p.length > 7) return true
//         if(p.length <=6) return false

//         // //if 6 then missing on
//         // //if cid exists then mand field is missing
//         if(p.filter(o => o.indexOf('cid') > -1).length == 1) {
//             return false
//         }

//         return true

//     },

//     buildPairs: (passport) => {
//         passport.map(o => {
//             let d = o.split(':')
//             console.log(d)
//         })
//     },

//     isValidIssYear: (passport) => {
        
//     }
// }

export class Passport {

    parts:any = []

    build(data) {
        data.forEach(o => {
            let arr = o.split(':')
            this.parts[arr[0]] = arr[1]
        });
    }

    isValid() {
        return  this.isValidBirthYear(this.parts['byr'])
                && this.isValidIssueYear(this.parts['iyr'])
                && this.isValidExpirationYear(this.parts['eyr'])
                && this.isValidHeight(this.parts['hgt'])
                && this.isValidHairColor(this.parts['hcl']) 
                && this.isValidEyeColor(this.parts['ecl']) 
                && this.isValidPassportId(this.parts['pid'])
                && this.isValidCountryId(this.parts['cid'])
    }

    getData() {
        console.log(this.parts)
        return this.parts
    }

    //byr
    isValidBirthYear(year) {
        return  year &&
                year >=1920 && 
                year <= 2002
    }

    //iyr
    isValidIssueYear(year) {
        return  year &&
                year >= 2010 && 
                year <= 2020
    }

    //eyr
    isValidExpirationYear(year) {
        return  year &&
                year >= 2020 &&
                year <= 2030
    }

    //hgt
    isValidHeight(height) {
        if(!height) return false
        
        if(!this.isHeightValidStart(height)) return false

        let heightParts = height.match(/(?<value>[0-9]{1,})(?<uom>[a-z]{2,})/)
        
        if(!this.isValidHeightParts(heightParts)) return false

        if(!this.isValidHeightWithUom(heightParts)) return false

        return true;

    }

    isValidHeightWithUom(heightParts) {
        if(heightParts.groups.uom === 'cm') {
            return this.isValidHeightCm(heightParts.groups.value)
        }

        return this.isValidHeightIn(heightParts.groups.value)
    }

    isValidHeightParts(heightParts) {
        return  heightParts && 
                heightParts.groups &&        
                heightParts.groups.uom && 
                heightParts.groups.value && 
                !isNaN(heightParts.groups.value)
    }

    isHeightValidStart(height) {
        return !isNaN(height.substring(0,1))
    }

    isValidHeightCm(height) {
        return height >= 150 && height <= 193
    }

    isValidHeightIn(height) {
        return height >= 59 && height <= 76
    }

    isValidHairColor(color) {
        return color && color.search(/^#[0-9a-f]{6}$/) > -1
    }

    isValidEyeColor(color) {
        const valid = ['amb','blu','brn','gry','grn','hzl','oth']
        return color && valid.indexOf(color) > -1
    }

    isValidPassportId(id) {
        return id && id.search(/^[0-9]{9}$/) > -1
    }

    isValidCountryId(cid) {
        return true
    }

}

// function day4b() {
//     let data = util.ReadFile('/data/Day4.txt', '\n\n');
//     let count = 0
//     data.forEach(row => {
//         let p = new passport()
//         p.build(row.split(/\n| /))
//         if(p.isValid()) {
//             count ++
//         }
//     })

//     console.log(count)

// }

// function day4a() {
//     let data = util.ReadFile('/data/Day4.txt', '\n\n');
//     let count = 0
//     data.forEach(row => {
//         let p = row.split(/\n| /)
//         if(day4Passport.IsValidPassport(p)) {
//             count ++
//         }
//     })

//     console.log(count)
// }