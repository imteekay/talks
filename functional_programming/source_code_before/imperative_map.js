const people = [
  { name: 'Kaio', age: 11 },
  { name: 'TK', age: 25 },
  { name: 'Kazumi', age: 30 }
];

var sentences = [];

for (var i = 0; i < people.length; i++) {
  const sentence = people[i].name + ' is ' + people[i].age + ' years old';
  sentences.push(sentence);
}

console.log(sentences);
// [
//   'Kaio is 11 years old',
//   'TK is 25 years old',
//   'Kazumi is 30 years old'
// ]
