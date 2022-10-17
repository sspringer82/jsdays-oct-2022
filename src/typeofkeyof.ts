// keyof

type Point = {
  x: number;
  y: number;
};

const coordinate: keyof Point = 'x';

const p: Point = {
  x: 1,
  y: 2,
};

console.log(p[coordinate]);

// typeof

function getPoint(x: number, y: number) {
  return {
    x,
    y,
  };
}

const p2: ReturnType<typeof getPoint> = getPoint(43, 21);
console.log(p2);

// index signature

interface Prices {
  [key: string]: number;
  sum: number;
}

const shoppingList: Prices = {
  Hammer: 14.5,
  Screws: 5.5,
  sum: 42,
};
