interface Cash {
  kind: "cash";
}

interface PayPal {
  kind: "paypal";
  email: string;
}

interface CreditCard {
  kind: "creditcard";
  cardNumber: string;
  securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function stringigyPaymentMethod(method: PaymentMethod): string {
  switch (method.kind) {
    case "cash":
      return "Cash";
    case "paypal":
      return `PayPal (${method.email})`;
    case "creditcard":
      return "Credit Card";
  }
}
