function makeChange(cents) {
  let change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  change.q = Math.floor(cents / 25);
  cents %= 25;

  change.d = Math.floor(cents / 10);
  cents %= 10;

  change.n = Math.floor(cents / 5);
  cents %= 5;

  change.p = cents; // remaining cents are pennies

  return change;
}

