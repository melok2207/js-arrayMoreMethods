function getMostFuelEfficientCars(cars, brand) {

  const allEfficient = cars.every(car => car.fuelConsumption < 6);


  if (allEfficient) {
    return cars
      .filter(car => car.brand === brand) 
      .sort((a, b) => a.fuelConsumption - b.fuelConsumption); 
    return [];
  }
}

const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota'));
// Результат: [{ brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 }, { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 }]

console.log(getMostFuelEfficientCars(cars, 'Honda'));
// Результат: [{ brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 }, { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 }]

console.log(getMostFuelEfficientCars(cars, 'Audi'));
// Результат: [{ brand: 'Audi', model: 'A3', fuelConsumption: 5.4 }, { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 }]

console.log(getMostFuelEfficientCars(cars, 'Dodge'));
// Результат: [{ brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }]

console.log(getMostFuelEfficientCars(cars, 'Ford'));
// Результат: [] (бо витрата палива для 'Ford Focus' більше 6 л/100 км)

module.exports = getMostFuelEfficientCars;
