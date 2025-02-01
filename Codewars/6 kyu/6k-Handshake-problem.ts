export function getParticipants(handshakes: number): number {
  return handshakes ? Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2) : 0;
} // getParticipants()

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
console.log(getParticipants(6));
console.log(getParticipants(7));
