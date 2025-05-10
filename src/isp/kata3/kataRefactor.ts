interface IDrivable {
  drive(): void;
}

interface IFlyable {
  fly(): void;
}

interface ISailable {
  sail(): void;
}

export class Car implements IDrivable {
  drive(): void {
    console.log("El coche está conduciendo");
  }
}

export class Plane implements IFlyable {
  fly(): void {
    console.log("El avión está volando");
  }
}

export class Boat implements ISailable {
  sail(): void {
    console.log("El bote está navegando");
  }
}
