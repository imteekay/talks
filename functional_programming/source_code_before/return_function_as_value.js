const stock = {
  'coffee': {
    label: "3 corações",
    count: 7
  },
  'water': {
    label: "Bonafont",
    count: 2
  },
  'juice': {
    label: "Ades",
    count: 3
  }
};

const beverages = ['coffee', 'water', 'juice'];

const makeSentence = (label, count) => `${label} with ${count} units`;

const buildBeverages = (beverages, stock) =>
  beverages.map(
    item => makeSentence(
      stock[item].label,
      stock[item].count
    )
  )

const result = buildBeverages(beverages, stock);

console.log(result);
