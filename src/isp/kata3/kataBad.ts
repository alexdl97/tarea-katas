interface IVehicle {
  drive(): void;
  fly(): void;
  sail(): void;
}

export class Car implements IVehicle {
  drive(): void {
    console.log("El coche está conduciendo");
  }

  fly(): void {
    throw new Error("Este vehículo no puede volar");
  }

  sail(): void {
    throw new Error("Este vehículo no puede navegar");
  }
}

export class Plane implements IVehicle {
  drive(): void {
    throw new Error("Este avión no puede conducir");
  }

  fly(): void {
    console.log("El avión está volando");
  }

  sail(): void {
    throw new Error("Este avion no puede navegar");
  }
}

export class Boat implements IVehicle {
  drive(): void {
    throw new Error("Este bote no puede conducir");
  }

  fly(): void {
    throw new Error("Este bote no puede volar");
  }

  sail(): void {
    console.log("El bote esta navegando");
  }
}
