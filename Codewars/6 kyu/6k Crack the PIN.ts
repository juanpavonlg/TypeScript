import * as crypto from "crypto";

export function crack(hash: string): string {
  for (let n = 0; n < 100000; n++) {
    const pin = n.toString().padStart(5, "0");
    if (md5(pin) === hash) {
      return pin;
    }
  }
  return "";
} // crack()

const md5 = (str: string) => crypto.createHash("md5").update(str).digest("hex");

console.log(crack("827ccb0eea8a706c4c34a16891f84e7b"));
console.log(crack("86aa400b65433b608a9db30070ec60cd"));
