import User from './user';

type Model = {
  users: User[];
  getAll: () => Promise<User[]>;
  getOne: (id: number) => Promise<User | undefined>;
};

const model: Model = {
  users: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ],
  async getAll() {
    return this.users;
  },
  async getOne(id: number) {
    return this.users.find((user) => user.id === id);
  },
};
export default model;
