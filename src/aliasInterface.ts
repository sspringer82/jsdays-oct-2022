type NullableString = string | (null & { foo: string });
type Foo = NullableString;

interface Person {
  name: string;
}

interface Person {
  age: number;
}

type Foo = Partial<Person>;

class User implements Person {
  name: string = '';
  age: number = 52;
}

function greet(user: Person) {
  console.log('Hallo ' + user.name);
}

const klaus = new User();
greet(klaus);
