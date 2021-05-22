class Vehicle {

    constructor(public color:string){
    }

    protected drive(): void {
        console.log('chugga chugga');
    }
    public honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheels:number,color:string){
        super(color)
    }
    drive():void{
        console.log('vroom');
    }
    startDrivingProcess():void{
        this.drive();
    }
}

const vehicle = new Vehicle('orange');
const car = new Car(4,'red');
car.startDrivingProcess();
car.honk();
console.log(vehicle.color);
console.log(car.color);



