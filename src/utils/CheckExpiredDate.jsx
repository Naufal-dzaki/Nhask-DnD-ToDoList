export default function CheckExpiredDate(ExpDate) {
  let toDay = new Date();
  let expiredDay = new Date(ExpDate);

  if (expiredDay.getDate() === toDay.getDate()) {
    return "on this date";
  } else if (expiredDay.getTime() > toDay.getTime()) {
    return "on future date";
  } else if (expiredDay.getTime() < toDay.getTime()) {
    return "out of date";
  }
}
