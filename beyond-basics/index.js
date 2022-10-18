import { writeFileSync } from 'node:fs';
import { faker } from '@faker-js/faker';

const users = new Array(1000).fill('').map((value, index) => ({
  id: index + 1,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  birthdate: faker.date.birthdate(),
  street: faker.address.streetAddress(true),
  city: faker.address.cityName(),
  zipCode: faker.address.zipCode(),
}));

const data = { users };

writeFileSync('data.json', JSON.stringify(data));
