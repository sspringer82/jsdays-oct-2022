abstract class User {
  static allUsersAge = 42;
  private age: number;
  private readonly yearOfBirth = 1970;
  #accountBalance: number = 0;

  static {
    console.log('foo');
    this.allUsersAge = 44;
  }

  constructor(private firstName: string, private lastName: string) {
    this.age = User.allUsersAge;
  }

  set accountBalance(value: number) {
    this.#accountBalance = value;
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greet(greeting: string): string {
    return `${greeting} ${this.fullName}`;
  }

  abstract earnMoney(amount: number): void;
}

class Account extends User {
  earnMoney(amount: number): void {
    this.accountBalance += amount;
  }

  static createUser(fn: string, ln: string): User {
    return new this(fn, ln);
  }

  greet(greeting: string): string {
    console.log(greeting + ' ' + this.fullName);
    return 'jaja passt schon';
  }
}

const klaus: User = new Account('Klaus', 'Müller');
console.log(klaus);
klaus.accountBalance = -Infinity;

function greet(user: User): void {
  console.log(`Hello ${user.fullName}`);
}
greet(klaus);

const lisa = Account.createUser('Lisa', 'Meier');
console.log(lisa.greet('Hallöchen'));
