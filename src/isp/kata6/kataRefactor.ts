interface ICreditCardPayment {
  processCreditCard(): void;
}

interface IPayPalPayment {
  processPayPal(): void;
}

interface ICryptoPayment {
  processCrypto(): void;
}

class CreditCardProcessor implements ICreditCardPayment {
  processCreditCard(): void {
    console.log("Procesando pago con tarjeta de crédito");
  }
}

class PayPalProcessor implements IPayPalPayment {
  processPayPal(): void {
    console.log("Procesando pago con PayPal");
  }
}

class CryptoProcessor implements ICryptoPayment {
  processCrypto(): void {
    console.log("Procesando pago con Criptomoneda");
  }
}
