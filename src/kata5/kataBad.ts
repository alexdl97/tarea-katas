export interface ISmartDevice {
  turnOn(): void;
  turnOff(): void;
  connectToWiFi(): void;
  playMusic(): void;
}

export class SmartLight implements ISmartDevice {
  turnOn(): void {
    console.log("Luz encendida");
  }

  turnOff(): void {
    console.log("Luz apagada");
  }

  connectToWiFi(): void {
    console.log("Luz conectada al WiFi");
  }

  playMusic(): void {
    throw new Error("Una luz no puede reproducir música.");
  }
}

export class SmartSpeaker implements ISmartDevice {
  turnOn(): void {
    console.log("Bocina encendida");
  }

  turnOff(): void {
    console.log("Bocina apagada");
  }

  connectToWiFi(): void {
    console.log("Bocina conectada al WiFi");
  }

  playMusic(): void {
    console.log("Reproduciendo música...");
  }
}
