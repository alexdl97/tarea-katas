interface ILegacyPrinter {
  print(): void;
  scan(): void;
  fax(): void;
}

export class BasicPrinter implements ILegacyPrinter {
  print(): void {
    console.log("Imprimiendo...");
  }

  scan(): void {
    throw new Error("Esta impresora no soporta escaneo");
  }

  fax(): void {
    throw new Error("Esta impresora no soporta fax");
  }
}
