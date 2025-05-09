interface IPaymentProcessor {
  processCreditCard(): void;
  processPayPal(): void;
  processCrypto(): void;
}

export class CreditCardProcessor implements IPaymentProcessor {
  processCreditCard(): void {
    console.log("Procesando pago con tarjeta de crédito");
  }

  processPayPal(): void {
    throw new Error("PayPal no es compatible con CreditCardProcessor");
  }

  processCrypto(): void {
    throw new Error("Cripto no es compatible con CreditCardProcessor");
  }
}

export class PayPalProcessor implements IPaymentProcessor {
  processCreditCard(): void {
    throw new Error("Tarjeta de crédito no es compatible con PayPalProcessor");
  }

  processPayPal(): void {
    console.log("Procesando pago con PayPal");
  }

  processCrypto(): void {
    throw new Error("Cripto no es compatible con PayPalProcessor");
  }
}

export class CryptoProcessor implements IPaymentProcessor {
  processCreditCard(): void {
    throw new Error("Tarjeta de crédito no es compatible con CryptoProcessor");
  }

  processPayPal(): void {
    throw new Error("PayPal no es compatible con CryptoProcessor");
  }

  processCrypto(): void {
    console.log("Procesando pago con Criptomoneda");
  }
}
