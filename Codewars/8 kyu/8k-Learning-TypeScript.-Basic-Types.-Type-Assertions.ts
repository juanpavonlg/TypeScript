export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
} // SuccessServerResult()

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
} // ErrorServerResult()

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return ((result as any) as ErrorServerResult).message;
  }
} // getResult()

const message = { message: "Success!" };
const success = new SuccessServerResult(200, message);
console.log(getResult(success));
const message2 = "Error...";
const error = new ErrorServerResult(400, message2);
console.log(getResult(error as any));
