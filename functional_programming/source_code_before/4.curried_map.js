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

const listBeverages = (beverages, stock) => `${label} with ${count} units`;

const result = listBeverages(beverages, stock);

console.log(result);
