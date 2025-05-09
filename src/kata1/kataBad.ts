interface IAnimal {
  fly(): void;
  swim(): void;
  run(): void;
}

export class Bird implements IAnimal {
  fly() {
    console.log("El pájaro vuela");
  }

  swim() {
    throw new Error("Los pájaros no nadan");
  }

  run() {
    console.log("El pájaro corre");
  }
}

export class Fish implements IAnimal {
  fly() {
    throw new Error("Los peces no vuelan");
  }

  swim() {
    console.log("El pez nada");
  }

  run() {
    throw new Error("Los peces no corren");
  }
}

export class Dog implements IAnimal {
  fly() {
    throw new Error("Los perros no vuelan");
  }

  swim() {
    console.log("El perro nada");
  }

  run() {
    console.log("El perro corre");
  }
}
