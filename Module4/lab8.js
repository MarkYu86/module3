// 1. Calculate the number of days between
// your birthdate and the current date
const { DateTime } = require("luxon");
function birthDays() {
  const birthday = DateTime.fromISO("1997-09-09");
  const today = DateTime.now();
  const result = today.diff(birthday, "days").days;
  return Math.floor(result);
}
console.log(birthDays());
// 2. Display the number of years, months,
// and days between your birthdate and
// current date
// Example: 24 years, 8 months, and 26 days
function age() {
  const birthday = DateTime.fromISO("1997-09-09");
  const today = DateTime.now();
  const result = today.diff(birthday, ["years", "months", "days"]);
  const years = result.years;
  const months = result.months;
  const days = Math.floor(result.days);
  return `${years}years,${months}months,${days}days,`;
}
console.log(age());
// 3. Given two dates, display the date closest
// to the current date
function closestDate() {
  const today = DateTime.now();
  const firstDate = DateTime.fromISO("2023-03-06");
  const secondDate = DateTime.fromISO("2012-12-12");

  if (firstDate > secondDate) {
    return firstDate.toISODate();
  } else {
    return secondDate.toISODate();
  }
}
console.log(closestDate());
// 4. Given two dates, display whether the first
// date is before or after the second date
function compareDates() {
  const firstDate = DateTime.fromISO("2024-09-09");
  const secondDate = DateTime.fromISO("2026-09-09");
  if (firstDate < secondDate) {
    return `${firstDate.toISODate()} is before ${secondDate.toISODate()}`;
  } else if (firstDate > (secondDate)) {
    return `${firstDate.toISODate()} is after ${secondDate.toISODate()}`;
  } else {
    return `${firstDate.toISODate()} is same as ${secondDate.toISODate()}`;
  }
}
console.log(compareDates());
