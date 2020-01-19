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

const listBeverage = stock => item =>
  makeSentence(
    stock[item].label,
    stock[item].count
  );

const listBeverages = (beverages, stock) =>
  beverages.map(listBeverage(stock))

const result = listBeverages(beverages, stock);

console.log(result);

// with object values

const makeSentence = ({ label, count }) => `${label} with ${count} units`;

const getStockItems = (stock) => Object.values(stock);

const listBeverages = (stock) => getStockItems(stock).map(makeSentence);

const result = listBeverages(stock);

console.log(result);
