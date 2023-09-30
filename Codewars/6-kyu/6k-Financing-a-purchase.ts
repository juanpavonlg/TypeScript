export function amort(rate: number, balance: number, term: number, paymentNo: number): string {
  rate /= 100 * 12;
  const c = rate * balance / (1 - (1 + rate) ** -term);
  const pow = (1 + rate) ** (paymentNo - 1);
  balance = pow * balance - (pow - 1) * c / rate; 
  const int = balance * rate;
  const princ = c - int;
  balance -= princ;
  return `num_payment ${paymentNo} c ${c.toFixed(0)} princ ${princ.toFixed(0)} int ${int.toFixed(0)} balance ${balance.toFixed(0)}`;
} // amort()

console.log(amort(6, 100000, 360, 1));
console.log(amort(6, 100000, 360, 12));
