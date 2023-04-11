export default function DateFormatNumber(date) {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
// export default function DateFormatNumber(date) {
//   return new Intl.DateTimeFormat("en-GB", {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//   }).format(Date.parse(date));
// }
