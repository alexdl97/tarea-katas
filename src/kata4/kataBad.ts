export interface ISensor {
  readTemperature(): number;
  readPressure(): number;
  readHumidity(): number;
}

export class TemperatureSensor implements ISensor {
  readTemperature(): number {
    return 22;
  }

  readPressure(): number {
    throw new Error("Este sensor no mide presión.");
  }

  readHumidity(): number {
    throw new Error("Este sensor no mide humedad.");
  }
}

export class PressureSensor implements ISensor {
  readTemperature(): number {
    throw new Error("Este sensor no mide temperatura.");
  }

  readPressure(): number {
    return 1013;
  }

  readHumidity(): number {
    throw new Error("Este sensor no mide humedad.");
  }
}

export class HumiditySensor implements ISensor {
  readTemperature(): number {
    throw new Error("Este sensor no mide temperatura.");
  }

  readPressure(): number {
    throw new Error("Este sensor no mide presión.");
  }

  readHumidity(): number {
    return 60;
  }
}
