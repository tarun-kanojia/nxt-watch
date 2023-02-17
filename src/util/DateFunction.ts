import { toFloor } from "./mathFunction";

export const getDuration = (date: string) => {
    const publishDate = new Date(date).getTime();
    const currentDate = new Date().getTime()
    const duration = currentDate - publishDate;

    const TIME_DIVIDER = {
        inMins: 1000 * 60,
        inHours: 1000 * 60 * 60,
        inDays: 1000 * 60 * 60 * 24,
        inWeeks: 1000 * 60 * 60 * 24 * 7,
        inMonths: 1000 * 60 * 60 * 24 * 7 * 4,
        inYears: 1000 * 60 * 60 * 24 * 7 * 4 * 12,

    }

    const numberOfYears = toFloor(duration / TIME_DIVIDER.inYears);
    const numberOfMonths = toFloor((numberOfYears % TIME_DIVIDER.inYears) / TIME_DIVIDER.inMonths);
    const numberOfWeeks = toFloor(((numberOfYears % TIME_DIVIDER.inYears) % TIME_DIVIDER.inMonths) / TIME_DIVIDER.inWeeks);
    const numberOfDays = toFloor((((numberOfYears % TIME_DIVIDER.inYears) % TIME_DIVIDER.inMonths) % TIME_DIVIDER.inWeeks) / TIME_DIVIDER.inDays);
    const numberOfHours = toFloor(((((numberOfYears % TIME_DIVIDER.inYears) % TIME_DIVIDER.inMonths) % TIME_DIVIDER.inWeeks) % TIME_DIVIDER.inDays) / TIME_DIVIDER.inHours);
    const numberOfMinutes = toFloor((((((numberOfYears % TIME_DIVIDER.inYears) % TIME_DIVIDER.inMonths) % TIME_DIVIDER.inWeeks) % TIME_DIVIDER.inDays)%TIME_DIVIDER.inHours) / TIME_DIVIDER.inMins)
    
    const EMPTY = '';
    const timeDuration = `
        ${numberOfYears >= 1 ? `${numberOfYears} years` : EMPTY}
        ${numberOfMonths >= 1 ? `${numberOfMonths} months` :EMPTY}
        ${numberOfWeeks >= 1 ? `${numberOfWeeks} weeks` : EMPTY}
        ${numberOfDays >= 1 ? `${numberOfDays} days` : EMPTY}
        ${numberOfHours >= 1 ? `${numberOfHours} hours` : EMPTY}
        ${numberOfMinutes >= 1 ? `${numberOfMinutes} min` : EMPTY}
        
    `;

    return timeDuration;

}