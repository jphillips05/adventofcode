const Passport = require('./day4Passport')
const jestConfig = require('./jest.config')
const mockData = 'eyr:2024 pid:662406624 hcl:#cfa07d byr:1947 iyr:2015 ecl:amb hgt:150cm'.split(/\n| /)
jest.mock('./day4Passport')


describe('passport', () => {
    let passport
    beforeAll(() => {
        passport = new Passport()
    })

    describe('pid', () => {
        test('invalid', () => {
            expect(passport.isValidPassportId('#24c4af') === false)
            expect(passport.isValidPassportId('4089063078') === false)
            expect(passport.isValidPassportId('187cm') === false)
        })
        test('valid', () => {
            expect(passport.isValidPassportId('559804716') === false)
        })
    })

    describe('eye color', () => {
        test('invalid', () => {
            expect(passport.isValidEyeColor() === false)
            expect(passport.isValidEyeColor('') === false)
            expect(passport.isValidEyeColor('not') === false)
        })
        test('valid', () => {
            expect(passport.isValidEyeColor('amb') === true)
            expect(passport.isValidEyeColor('blu') === true)
            expect(passport.isValidEyeColor('brn') === true)
            expect(passport.isValidEyeColor('gry') === true)
            expect(passport.isValidEyeColor('grn') === true)
            expect(passport.isValidEyeColor('hzl') === true)
            expect(passport.isValidEyeColor('oth') === true)
        })
    })

    describe('hair color', () => {
        test('invalid if empty', () => {
            expect(passport.isValidHairColor() === false)
        })
        test('invalid if does not start with #', () => {
            expect(passport.isValidHairColor('aaaaa') === false)
        })
        test('valid hari color', () => {   
            expect(passport.isValidHairColor('#aaaaa') === true)
        })
        test('invalid when length too short', () => {
            expect(passport.isValidHairColor('#aaaaa') === false)
        })
        test('invalid when length too long', () => {
            expect(passport.isValidHairColor('#aaaaaaaaaaaaaaa') === false)
        })
        test('invalid when length too long', () => {
            expect(passport.isValidHairColor('#aaaaaa') === true)
        })
    })

    describe('birth year', () => {
        test('is invalid when empty', () => {
            expect(passport.isValidBirthYear() === false)
        })
        test('is invalid when to low', () => {
            expect(passport.isValidBirthYear(1919) === false)
        })
        test('is invalid when too high', () => {
            expect(passport.isValidBirthYear(2021) === false)
        })
        test('is valid', () => {
            expect(passport.isValidBirthYear(1985) === true)
        })
    })

    describe('issue year', () => {
        test('is invalid when empty', () => {
            expect(passport.isValidIssueYear() === false)
        })
        test('is invalid when to low', () => {
            expect(passport.isValidIssueYear(2010) === false)
        })
        test('is invalid when too high', () => {
            expect(passport.isValidIssueYear(2020) === false)
        })
        test('is valid', () => {
            expect(passport.isValidIssueYear(2005) === true)
        })
    })

    describe('expire year', () => {
        test('is invalid when empty', () => {
            expect(passport.isValidExpirationYear() === false)
        })
        test('is invalid when to low', () => {
            expect(passport.isValidExpirationYear(2019) === false)
        })
        test('is invalid when too high', () => {
            expect(passport.isValidExpirationYear(2031) === false)
        })
        test('is valid', () => {
            expect(passport.isValidExpirationYear(2020) === true)
        })
    })

    describe('height', () => {
        test('is invalid when empty', () => {
            expect(passport.isValidHeight() === false)
        })

        describe('starts with', () => {
            test('is invalid when does not start with a number', () => {
                expect(passport.isHeightValidStart('a') === false)
            })
            test('is valid', () => {
                expect(passport.isHeightValidStart('10cm') === true)
            })
        })

        describe('height parts', () => {
            test('is invalid when does not have groups', () => {
                expect(passport.isValidHeightParts({}) === false)
            })

            test('is invalid when does not have a value', () => {
                expect(passport.isValidHeightParts({groups:{uom:'cm'}}) === false)
            })

            test('is invalid when does not have a uom', () => {
                expect(passport.isValidHeightParts({groups:{value:10}}) === false)
            })

            test('is valid', () => {
                expect(passport.isValidHeightParts({groups:{value:10, uom: 'cm'}}) === false)
            })
        })

        describe('height with uom', () => {
            test('is invalid with wrong uom', () => {
                expect(passport.isValidHeightWithUom({groups:{value:60, uom: 'cm'}}) === false)
                expect(passport.isValidHeightWithUom({groups:{value:160, uom: 'in'}}) === false)
                expect(passport.isValidHeightWithUom({groups:{value:60, uom: 'in'}}) === true)
                expect(passport.isValidHeightWithUom({groups:{value:160, uom: 'cm'}}) === true)
            })
        })

        describe('in', () => {
            test('is invalid when empty', () => {
                expect(passport.isValidHeightIn() === false)
            })

            test('is invalid when in too low', () => {
                expect(passport.isValidHeightIn(58) === false)
            })

            test('is invalid when in too high', () => {
                expect(passport.isValidHeightIn(78) === false)
            })

            test('is valid', () => {
                expect(passport.isValidHeightIn(60) === true)
            })
        })

        describe('cm', () => {
            test('is invalid when empty', () => {
                expect(passport.isValidHeightIn() === false)
            })

            test('is invalid when in too low', () => {
                expect(passport.isValidHeightIn(149) === false)
            })

            test('is invalid when in too high', () => {
                expect(passport.isValidHeightIn(194) === false)
            })

            test('is valid', () => {
                expect(passport.isValidHeightIn(150) === true)
            })
        })
    })
    
})



