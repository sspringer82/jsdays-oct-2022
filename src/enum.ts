enum Food {
  schweinebraten,
  kartoffel = 'Kartoffeln',
  schitzel = 'Schnitzel',
}

function eat(what: Food): void {
  console.log(`yummy, ${what}`);
}
eat(Food.kartoffel);
