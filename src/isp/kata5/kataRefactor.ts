export interface IPowerControllable {
  turnOn(): void;
  turnOff(): void;
}

export interface IWiFiConnectable {
  connectToWiFi(): void;
}

export interface IMusicPlayable {
  playMusic(): void;
}

export class SmartLight implements IPowerControllable, IWiFiConnectable {
  turnOn(): void {
    console.log("Luz encendida");
  }

  turnOff(): void {
    console.log("Luz apagada");
  }

  connectToWiFi(): void {
    console.log("Luz conectada al WiFi");
  }
}

export class SmartSpeaker
  implements IPowerControllable, IWiFiConnectable, IMusicPlayable
{
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
