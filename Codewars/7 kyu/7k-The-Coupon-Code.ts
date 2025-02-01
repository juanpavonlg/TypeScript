export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  const date1 = new Date(currentDate);
  const date2 = new Date(expirationDate);
  return enteredCode === correctCode && date2 >= date1;
} // checkCoupon()

console.log(checkCoupon('123', '123', 'September 5, 2014', 'May 1, 2014'));
