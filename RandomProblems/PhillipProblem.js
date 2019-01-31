
function getAmountSpend(keyboards, drives, b) {
  let highestCombo = -1;

  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      let total = keyboard + drive;
      if (total > highestCombo && total <= b) {
        highestCombo = total;
      }
    })
  });

  return highestCombo;
}

getAmountSpend([3, 1], [5, 2, 8], 10);    // returns 9

getAmountSpend([4], [5], 5);              // returns -1
