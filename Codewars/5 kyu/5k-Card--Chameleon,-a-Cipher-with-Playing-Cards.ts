export default class CardChameleon {
  /**
   * Takes a String containing a message and an array of Strings representing a deck
   * of playing cards, and returns a String containing the text encrypted
   */
  public encrypt(message: string, deck: string[]): string {
    this.prepare(deck);
    const alphaToBlack: { [key: string]: string } = {
      A: "AC", B: "2C", C: "3C", D: "4C", E: "5C", F: "6C", G: "7C", H: "8C", I: "9C",
      J: "TC", K: "JC", L: "QC", M: "KC", N: "AS", O: "2S", P: "3S", Q: "4S", R: "5S",
      S: "6S", T: "7S", U: "8S", V: "9S", W: "TS", X: "JS", Y: "QS", Z: "KS", " ": "XB"
    };
    const redtoAlpha: { [key: string]: string } = {
      "AD": "A", "2D": "B", "3D": "C", "4D": "D", "5D": "E", "6D": "F", "7D": "G", "8D": "H", "9D": "I",
      "TD": "J", "JD": "K", "QD": "L", "KD": "M", "AH": "N", "2H": "O", "3H": "P", "4H": "Q", "5H": "R",
      "6H": "S", "7H": "T", "8H": "U", "9H": "V", "TH": "W", "JH": "X", "QH": "Y", "KH": "Z", "XR": " "
    };
    let encrypted = "";
    for (const ch of message) {
      const index = deck.indexOf(alphaToBlack[redtoAlpha[deck[deck.indexOf(alphaToBlack[ch]) - 1]]]) - 1;
      encrypted += redtoAlpha[deck[index]];
      [deck[0], deck[index]] = [deck[index], deck[0]];
      deck.push(deck.shift()!, deck.shift()!);
    }
    return encrypted;
  } // encrypt()

  /**
   * Takes a String containing an encrypted message and an array of Strings
   * representing a deck of playing cards, and returns a String containing the
   * message decrypted
   */
  public decrypt(encrypted: string, deck: string[]): string {
    this.prepare(deck);
    const alphaToRed: {[key: string]: string} = {
      A: "AD", B: "2D", C: "3D", D: "4D", E: "5D", F: "6D", G: "7D", H: "8D", I: "9D",
      J: "TD", K: "JD", L: "QD", M: "KD", N: "AH", O: "2H", P: "3H", Q: "4H", R: "5H",
      S: "6H", T: "7H", U: "8H", V: "9H", W: "TH", X: "JH", Y: "QH", Z: "KH", " ": "XR"
    };
    const blacktoAlpha: {[key: string]: string} = {
      "AC": "A", "2C": "B", "3C": "C", "4C": "D", "5C": "E", "6C": "F", "7C": "G", "8C": "H", "9C": "I",
      "TC": "J", "JC": "K", "QC": "L", "KC": "M", "AS": "N", "2S": "O", "3S": "P", "4S": "Q", "5S": "R",
      "6S": "S", "7S": "T", "8S": "U", "9S": "V", "TS": "W", "JS": "X", "QS": "Y", "KS": "Z", "XB": " "
    };
    let message = "";    
    for (const ch of encrypted) {
      const index = deck.indexOf(alphaToRed[ch]);
      message += blacktoAlpha[deck[deck.indexOf(alphaToRed[blacktoAlpha[deck[index + 1]]]) + 1]];
      [deck[0], deck[index]] = [deck[index], deck[0]];
      deck.push(deck.shift()!, deck.shift()!);
    }
    return message;
  } // decrypt()

  private prepare(deck: string[]) {
    const redPile = deck.filter((e) => /[DHR]/.test(e));
    const blackPile = deck.filter((e) => /[CSB]/.test(e));
    for (let i = 0; i < deck.length; i++) {
      deck[i] = i % 2 ? blackPile[Math.floor(i / 2)] : redPile[i / 2];
    }
  } // prepare()
} // CardChameleon

const cardChameleon = new CardChameleon();
let deck = [
  "2C", "6H", "5S", "7S", "JS", "8C", "7C", "2D", "3D", "8D", "3C", "KS", "QS",
  "2S", "7D", "TD", "QC", "TS", "AH", "5C", "XB", "TH", "AC", "9H", "6D", "4C",
  "7H", "3S", "5H", "KC", "3H", "6C", "4D", "8H", "KH", "8S", "JC", "5D", "TC",
  "9D", "2H", "9C", "4S", "4H", "QD", "AS", "JH", "6S", "QH", "9S", "XR", "JD",
  "AD", "KD"
];
console.log(cardChameleon.encrypt("ATTACK TONIGHT ON CODEWARS", deck));
deck = [
  "2C", "6H", "5S", "7S", "JS", "8C", "7C", "2D", "3D", "8D", "3C", "KS", "QS",
  "2S", "7D", "TD", "QC", "TS", "AH", "5C", "XB", "TH", "AC", "9H", "6D", "4C",
  "7H", "3S", "5H", "KC", "3H", "6C", "4D", "8H", "KH", "8S", "JC", "5D", "TC",
  "9D", "2H", "9C", "4S", "4H", "QD", "AS", "JH", "6S", "QH", "9S", "XR", "JD",
  "AD", "KD"
];
console.log(cardChameleon.decrypt("QNBSCTZQOLOBZNKOHUHGLQWLOK", deck));
