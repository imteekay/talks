// Immutability in compile time: a way of constraint

const authorV1 = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
};

authorV1.books.push({
  title: 'Steve Jobs',
  price: 10.00
});

// -----------------------------------------------------------------------

const authorV2 = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
} as const;

authorV2.books.push({
  title: 'Steve Jobs',
  price: 10.00
});
// Property 'push' does not exist on type
// 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'

// -----------------------------------------------------------------------

type Book = Readonly<{
  title: string;
  price: number;
}>;

type Author = Readonly<{
  name: string;
  email: string;
  books: Readonly<Book[]>;
}>;

const author: Author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
};

const book: Book = {
  title: 'Steve Jobs',
  price: 30
};

book.title = 'Another title'; // Cannot assign to 'title' because it is a read-only property.
author.name = 'TK'; // Cannot assign to 'name' because it is a read-only property.
author.books.push(book); // Property 'push' does not exist on type 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'.