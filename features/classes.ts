// Section 8

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('VRRROOOOOM');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car1 = new Car(4, 'red');
car1.startDrivingProcess();
