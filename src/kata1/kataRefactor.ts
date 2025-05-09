interface IFlyable {
  fly(): void;
}

interface ISwimmable {
  swim(): void;
}

interface IRunnable {
  run(): void;
}

export class Bird implements IFlyable, IRunnable {
  fly() {
    console.log("El pájaro vuela");
  }

  run() {
    console.log("El pájaro corre");
  }
}

export class Fish implements ISwimmable {
  swim() {
    console.log("El pez nada");
  }
}

export class Dog implements ISwimmable, IRunnable {
  swim() {
    console.log("El perro nada");
  }

  run() {
    console.log("El perro corre");
  }
}
