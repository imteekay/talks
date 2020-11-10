const city = 'Tokyo';
city.toUppercase();
// Property 'toUppercase' does not exist on type
// 'string'. Did you mean 'toUpperCase'?

// ------------------------------------------------

const people = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const person of people) {
  console.log(person.agi);
  // Property 'agi' does not exist on type '{ name: string; age: number; }'
}

// ------------------------------------------------

type SnackbarStatus = {
  isClosed: boolean;
};

const buildSnackbar = (status: SnackbarStatus) => {
  if (status.isClosed) {
    // openSnackbar();
  }
};

buildSnackbar({ isclosed: true });
