function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(sport => {
    const percentOfSuccess = ((sport.medals / sport.athletes) * 100).toFixed(1);
    return { ...sport, percentOfSuccess: parseFloat(percentOfSuccess) };
  });
}

// Приклад використання:
const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
// Результат: [
//   { sport: 'Swimming', athletes: 20, medals: 6, percentOfSuccess: 30.0 },
//   { sport: 'Gymnastics', athletes: 10, medals: 2, percentOfSuccess: 20.0 },
//   { sport: 'Boxing', athletes: 15, medals: 5, percentOfSuccess: 33.3 },
//   { sport: 'Athletics', athletes: 25, medals: 3, percentOfSuccess: 12.0 }
// ]

module.exports = addSuccessPercent;
