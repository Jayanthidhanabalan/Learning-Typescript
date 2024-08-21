class Vehicle {
  constructor(public color: string) {
    console.log(color);
  }
  public drive(): void {
    console.log("Drive Safe");
  }

  private honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive1(): void {
    console.log(`${this.color} Ready!!! Go`);
  }
  startDrivingProcess(): void {
    this.drive1();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car("Orange");
car.drive();
car.startDrivingProcess();
//car.honk();
