function add(a: number, b = 42): number {
  return b ? a + b : a;
  if (b) {
    return a + b;
  }
  return a;
}

add(4);
add(4, 2);

add(34, null);
