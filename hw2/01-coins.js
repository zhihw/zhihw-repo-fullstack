/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(amount) {
  const parts = [];
  parts.push(`$${amount} ==>`);
  if (amount > 100) {
    parts.push("Error: the number is too large");
    const [head, err] = parts;
    return head + " " + err;
  }
  let total = Math.round(amount * 100);
  const dollars = Math.floor(total / 100);
  total -= dollars * 100;
  const quarters = Math.floor(total / 25);
  total -= quarters * 25;
  const dimes = Math.floor(total / 10);
  total -= dimes * 10;
  const nickels = Math.floor(total / 5);
  total -= nickels * 5;
  const pennies = Math.floor(total);

  if (dollars) parts.push(`${dollars} dollar${dollars > 1 ? "s" : ""}`);
  if (quarters) parts.push(`${quarters} quarter${quarters > 1 ? "s" : ""}`);
  if (dimes) parts.push(`${dimes} dime${dimes > 1 ? "s" : ""}`);
  if (nickels) parts.push(`${nickels} nickel${nickels > 1 ? "s" : ""}`);
  if (pennies) {
    const text = `${pennies} penny${pennies > 1 ? "ies" : ""}`.replace(
      /yies$/,
      "ies"
    );
    parts.push(text);
  }
  const [head, ...tail] = parts;
  return head + (tail.length ? " " + tail.join(", ") : "");
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
