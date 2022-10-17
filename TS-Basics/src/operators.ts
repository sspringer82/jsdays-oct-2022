const number1 = 42 ** 2; //Math.pow(42, 2);

const o = {
  name: 'klaus',
};

console.log('name' in o);

o instanceof Number;

delete o.name;

const a = '';

// nullish coalescing operator
if (false ?? a) {
  // wie || undefined und null und false sind falsy values
  console.log('hallo welt');
}

const person = {
  name: 'klaus',
  address: {
    street: 'mainstreet 3',
  },
};

console.log(
  person && person.address && person.address.city && person.address.city.zip
);

console.log(person?.address?.city?.zip);

const name = person.name;
const address = person.address;

const { name: personName, address } = person;
const persons = ['Klaus', person, 'Petra'];
const [erstePerson, { name: personsPersonName, address }, c] = persons;

function foo({ name, address }: { name: string; address: string }): void {}
