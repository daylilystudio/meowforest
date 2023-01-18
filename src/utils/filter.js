function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}
function date(timestamp, addDay=0, time=true) {
  const date = new Date(timestamp)
  const dateArr = {}
  dateArr.year = date.getFullYear()
  dateArr.month = date.getMonth() + 1
  dateArr.day = date.getDate()
  dateArr.hour = date.getHours()
  dateArr.min = date.getMinutes()
  const timeTxt = time ? ` (${dateArr.hour}:${dateArr.min})` : ''
  return `${dateArr.year}-${dateArr.month}-${dateArr.day+addDay}${timeTxt}`
}
export default {
  currency, date
}