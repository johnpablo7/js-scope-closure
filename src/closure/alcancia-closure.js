// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

// Usando closure:
function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // 5
myMoneyBox(7); // 12
myMoneyBox(3); // 15

const moneyBoxAna = moneyBox();
moneyBoxAna(10); // 10
moneyBoxAna(10); // 20
moneyBoxAna(10); // 30
