let hours = 50;
let wages = 10;

if (hours <= 40) {
  console.log(`Your total Pay = $${hours * wages}!`);
} else {
  let extra = hours - 40;
  console.log(
    `Way to hit overtime! Your Pay is $${wages * 40 +
      extra * wages * 1.5}! Make sure to get some sleep`
  );
}
