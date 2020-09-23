// ----- Data area -----
const weekdayDataSet: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

// ----- Interface Area -----
interface IGetWeekdayInput {
    date: number
    month: number
    year: number
}

// ----- Functions Area -----
function convertDateToPoint(input: IGetWeekdayInput) {
    const ifx = {
        date: 1,
        month: 1,
        year: 1900
    }

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

    return diffDate(ifx.date, input.date) + diffMonth(ifx.month, input.month, monthDaySet) + diffYear(ifx.year, input.year)
}

export function diffDate(
    start: number,
    end: number
): number {
    return Math.abs(start - end)
}

export function diffYear(start: number, end: number): number {
    let e: number = Math.abs(start - end)
    let j = -1

    for (let i = 0; i <= e; i += 4) {
        j += 1
    }

    return Math.abs(start - end) * 365 + j
}

export function diffMonth(
    start: number,
    end: number,
    monthDaySet: number[]
): number {
    const distance = Math.abs(start - end)
    let result = 0
    for (let i = 0; i < distance; i++) {
        result += monthDaySet[i]
    }
    return result
}

export function getWeekdayAtPoint(
    point: number,
    weekday: string[] = weekdayDataSet
) {
    let indicator: number = 0
    for (let i = 0, j = 0; i <= point; i += 1, j += 1) {
        if (!(i % 7)) {
            j = 0
        }
        indicator = j
    }
    return weekday[indicator]
}

export function getWeekday(input: IGetWeekdayInput): string {
    const point: number = convertDateToPoint(input)
    return getWeekdayAtPoint(point)
}

// ----- Interface Area -----
// const data: IGetWeekdayInput = {
//     date: 2,
//     month: 1,
//     year: 1900
// }

// console.log('What weekday is today?')
// console.log('input =', JSON.stringify(data, null, 2))
// const answer: string = getWeekday(data, weekdayDataSet)
// console.log('answer =', answer)
