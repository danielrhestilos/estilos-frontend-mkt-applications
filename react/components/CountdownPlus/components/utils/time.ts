import { TimeSplit } from '../../../../typings/global'

const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR

const fillWithZero = (digits: number, number: number): string => {
  const filled = `${'0'.repeat(digits - 1)}${number}`

  return filled.slice(filled.length - digits)
}

const fillWithZeroDay = (digits: number, number: number): string => {
  const filled = `${''.repeat(digits - 1)}${number}`

  return filled.slice(filled.length - digits)
}

export const parseTimeRemaining = (totalSeconds: number): TimeSplit => {
  const days = Math.floor(totalSeconds / SECONDS_IN_DAY)

  const hours = Math.floor((totalSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR)

  const minutes = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  )

  const seconds = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE
  )

  return {
    days: fillWithZeroDay(3, days),
    hours: fillWithZero(2, hours),
    minutes: fillWithZero(2, minutes),
    seconds: fillWithZero(2, seconds),
  }
}

/**
 *
 * @param targetDate ISOString for the date that the countdown will expire
 * @param dispatchFn A function that updates the state of the component
 */
export const tick = (
  targetDate: string,
  dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>>
) => {
  const ONE_SECOND_IN_MILLIS = 1000
  const finalDate = new Date(targetDate)
  const now = new Date()

  const secondsLeft =
    (finalDate.getTime() - now.getTime()) / ONE_SECOND_IN_MILLIS

  setTimeout(() => {
    dispatchFn(parseTimeRemaining(secondsLeft))
  }, ONE_SECOND_IN_MILLIS)
}

export const getTwoDaysFromNow = () => {
  const today = new Date()

  today.setDate(today.getDate() + 2)

  return today.toISOString()
}


/**
 * The `remaining` function calculates the remaining time in days, hours, minutes, and seconds and
 * returns it in a formatted string.
 * @param {number} remainingTime - The `remainingTime` parameter represents the remaining time in
 * milliseconds.
 * @returns the formatted remaining time in the format "days:hours:minutes:seconds".
 */
export const remaining = (remainingTime: number) => {
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return formatTime(days, hours, minutes, seconds)
}

/**
 * The `formatTime` function takes in days, hours, minutes, and seconds as parameters and returns an
 * object with formatted values for each unit of time.
 * @param {number} days - The `days` parameter represents the number of days.
 * @param {number} hours - The `hours` parameter in the `formatTime` function represents the number of
 * hours in a time duration. It is used to format the hours part of the time duration into a two-digit
 * string.
 * @param {number} minutes - The `minutes` parameter in the `formatTime` function represents the number
 * of minutes in a time duration. It is used to calculate the formatted minutes in the returned object.
 * @param {number} seconds - The `seconds` parameter represents the number of seconds in a time
 * duration.
 * @returns an object with properties 'days', 'hours', 'minutes', and 'seconds'. The values of these
 * properties are the formatted versions of the input parameters.
 */
export const formatTime = (days: number, hours: number, minutes: number, seconds: number) => {

  const formattedDays = days.toString();
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return {
    'days': formattedDays,
    'hours': formattedHours,
    'minutes': formattedMinutes,
    'seconds': formattedSeconds
  }
}

/**
 * The function `isValidDate` checks if a given string follows the format YYYY/MM/DD.
 * @param {string} dateString - A string representing a date in the format "YYYY/MM/DD".
 * @returns The function `isValidDate` returns a boolean value.
 */
// export const isValidDate = (dateString: string): boolean => {
//   // Validar si la fecha tiene el formato correcto (YYYY/MM/DD)
//   const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
//   return datePattern.test(dateString);
// };



export function isValidDate(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date
  return d instanceof Date && !isNaN(d.getTime())
}