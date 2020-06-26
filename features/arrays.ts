// Section 5

const carMakers: string[] = ['ford', 'toyota', 'mercedes'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop;

// Prevent incompatible values
carMakers.push(1);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2020-06-16'];
importantDates.push('2021-10-10');
importantDates.push(1);
