function numberRange(num) {
  switch(num) {
    case (num < 51 && num > 0):
      console.log(`${num} is between 0 and 50`)
      break;
    case (num <= 100 && num > 50):
      console.log(`${num} is between 51 and 100`)
      break;
    case (num >100): 
      console.log(`${num} is greater than 100`)
      break;
    default: 
      console.log(`${num} is less than 0`)
      break;
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);