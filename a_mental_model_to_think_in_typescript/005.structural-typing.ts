// Nominal Typing as Java
class Person {
  String name;
}

class Client {
  String name;
}

Client c = new Client();
Client p = new Person();

// Structural Typing
class Person {
  name: string;
}

class Client {
  name: string;
}

const client: Client = new Client();
const person: Person = new Client();
