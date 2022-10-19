import { faker } from '@faker-js/faker';

class UserDataGenerator {
  #fakeData = [];

  constructor(number) {
    this.number = number;
  }

  get fakeData() {
    if (this.#fakeData.length > 0) {
      return this.#fakeData;
    }
    this.#fakeData = new Array(this.number).fill('').map((data) => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    }));
    return this.#fakeData;
  }

  print() {
    for (const userData of this.fakeData) {
      console.log(userData);
    }
  }
}

const faky = new UserDataGenerator(10);
// faky.generate();
faky.print();
