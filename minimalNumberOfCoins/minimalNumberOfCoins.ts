export function minimalNumberOfCoins(coins: number[], price: number): number {
  const coinsSorted = coins.sort((a, b) => a - b);
  let nextCoin = coinsSorted.length - 1;
  let remaining = price;
  let count = 0;
  while (remaining > 0) {
    const divideOf = remaining;
    remaining = remaining % coinsSorted[nextCoin];
    const divide = divideOf - remaining;
    const amount = divide / coinsSorted[nextCoin];
    count += amount;
    nextCoin--;
    if (nextCoin < 0) {
      count++;
      break;
    }
  }

  return count;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
