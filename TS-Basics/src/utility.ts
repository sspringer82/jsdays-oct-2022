type User = {
  id: number;
  username: string;
};

type InputUser = Omit<User, 'id'> & { id?: number };

function save(newUser: InputUser): void {
  if (newUser.id) {
    // update
  } else {
    // create
  }
  // save user to database/server
  console.log(newUser);
}

function getPoint(x: number, y: number) {
  return {
    x,
    y,
  };
}

const p2: ReturnType<typeof getPoint> = getPoint(43, 21);
console.log(p2);
