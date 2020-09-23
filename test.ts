import {expect} from "chai"
import {diffDate, diffMonth, diffYear, getWeekday, getWeekdayAtPoint} from "."

enum DAY {
    SUNDAY = 'sunday',
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
    THURSDAY = 'thursday',
    FRIDAY = 'friday',
    SATURDAY = 'saturday'
}

describe('getWeekday', () => {
    describe('january', () => {
        it('getWeekdayInput_1Jan1900_ShouldBeMonday', () => {
            expect(getWeekday({
                date: 1,
                month: 1,
                year: 1900
            })).to.equal('monday')
        })

        it('getWeekdayInput_7Jan1900_ShouldBeSunday', () => {
            expect(getWeekday({
                date: 7,
                month: 1,
                year: 1900
            })).to.equal('sunday')
        })

        it('getWeekdayInput_8Jan1900_ShouldBeSunday', () => {
            expect(getWeekday({
                date: 8,
                month: 1,
                year: 1900
            })).to.equal('monday')
        })

        it('getWeekdayInput_31Jan1900_ShouldBeWednesday', () => {
            expect(getWeekday({
                date: 31,
                month: 1,
                year: 1900
            })).to.equal('wednesday')
        })

        it('getWeekdayInput_12Jan1900_ShouldBeFriday', () => {
            expect(getWeekday({
                date: 12,
                month: 1,
                year: 1900
            })).to.equal(DAY.FRIDAY)
        })
    })

    describe('february', () => {
        it('getWeekdayInput_1Feb1900_ShouldBeThursday', () => {
            expect(getWeekday({
                date: 1,
                month: 2,
                year: 1900
            })).to.equal('thursday')
        })

        it('getWeekdayInput_18Feb1900_ShouldBeThursday', () => {
            expect(getWeekday({
                date: 18,
                month: 2,
                year: 1900
            })).to.equal(DAY.SUNDAY)
        })

        it('getWeekdayInput_27Feb1900_ShouldBeThursday', () => {
            expect(getWeekday({
                date: 27,
                month: 2,
                year: 1900
            })).to.equal(DAY.TUESDAY)
        })
    })

    describe('march', () => {
        it('getWeekdayInput_1Mar1900_ShouldBeThursday', () => {
            expect(getWeekday({
                date: 1,
                month: 3,
                year: 1900
            })).to.equal(DAY.THURSDAY)
        })
    })

    describe('randomDateInput', () => {
        it('2Jan1995=mondayShouldBeTrue', function () {
            expect(getWeekday({
                date: 2,
                month: 1,
                year: 1995
            })).to.equal(DAY.MONDAY)
        });

        it('23Sep2020=wednesdayShouldBeTrue', () => {
            expect(getWeekday({
                date: 23,
                month: 9,
                year: 2020
            })).to.equal(DAY.WEDNESDAY)
        })

        it('25Dec2020=fridayShouldBeTrue', () => {
            expect(getWeekday({
                date: 25,
                month: 12,
                year: 2020
            })).to.equal(DAY.FRIDAY)
        })
    })
})

describe('getWeekdayAtPoint', () => {
    it('getMondayWith0', () => {
        expect(getWeekdayAtPoint(0)).equal('monday')
    })

    it('getSundayWith6', () => {
        expect(getWeekdayAtPoint(6)).equal('sunday')
    })

    it('getMondayWith7', () => {
        expect(getWeekdayAtPoint(7)).equal('monday')
    })

    it('getThursdayWith10', () => {
        expect(getWeekdayAtPoint(10)).equal('thursday')
    })

    it('getMondayWith34', () => {
        expect(getWeekdayAtPoint(34)).equal(DAY.SUNDAY)
    })

    it('getWednesdayWith219', () => {
        expect(getWeekdayAtPoint(219)).equal(DAY.WEDNESDAY)
    })

    it('getWednesdayWith365', () => {
        expect(getWeekdayAtPoint(365)).equal(DAY.TUESDAY)
    })
})

describe('diffDate', () => {
    it('date1diff1=0ShouldBeTrue', () => {
        expect(diffDate(1, 1)).equal(0)
    })

    it('date1diff10=9ShouldBeTrue', () => {
        expect(diffDate(1, 10)).equal(9)
    })

    it('date10diff20=19ShouldBeTrue', () => {
        expect(diffDate(10, 20)).equal(10)
    })
})

describe('diffMonth', () => {
    const monthDaySet: number[] = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]

    it('diff1And2=31ShouldBeTrue', () => {
        expect(diffMonth(1, 2, monthDaySet)).equal(31)
    })

    it('diff1and1=0ShouldBeTrue', () => {
        expect(diffMonth(1, 1, monthDaySet)).equal(0)
    })
})

describe('diffYear', () => {
    it('diffYear1900AND1900=0ShouldBeTrue', () => {
        expect(diffYear(1900, 1900)).equal(0)
    });

    it('diffYear1900AND1901=365ShouldBeTrue', () => {
        expect(diffYear(1900, 1901)).equal(365)
    })

    it('diffYear1900AND1902=730ShouldBeTrue', () => {
        expect(diffYear(1900, 1902)).equal(730)
    })

    it('test', () => {
        let e: number = Math.abs(1900 - 1908) % 4
        console.log(e)
    })
})
