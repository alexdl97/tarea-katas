export interface ITemperatureReadable {
  readTemperature(): number;
}

export interface IPressureReadable {
  readPressure(): number;
}

export interface IHumidityReadable {
  readHumidity(): number;
}

export class TemperatureSensor implements ITemperatureReadable {
  readTemperature(): number {
    return 22;
  }
}

export class PressureSensor implements IPressureReadable {
  readPressure(): number {
    return 1013;
  }
}

export class HumiditySensor implements IHumidityReadable {
  readHumidity(): number {
    return 60;
  }
}
