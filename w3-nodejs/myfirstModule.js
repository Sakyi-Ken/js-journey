// exports.myDateTime = () => {
//   return Date();
// }

export function myDateTime() {
  return Date();
}

export default function() {
  const date = new Date();
  return date.toISOString();
}