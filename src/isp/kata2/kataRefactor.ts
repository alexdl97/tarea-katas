interface IPrintable {
  print(): void;
}

interface IScannable {
  scan(): void;
}

interface IFaxable {
  fax(): void;
}

class BasicPrinter implements IPrintable {
  print(): void {
    console.log("Imprimiendo...");
  }
}

class MultiFunctionPrinter implements IPrintable, IScannable, IFaxable {
  print(): void {
    console.log("Imprimiendo...");
  }

  scan(): void {
    console.log("Escaneando...");
  }

  fax(): void {
    console.log("Enviando fax...");
  }
}
