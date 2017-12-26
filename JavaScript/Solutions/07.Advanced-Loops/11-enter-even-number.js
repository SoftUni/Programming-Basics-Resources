function enterEvenNumber(args) {
  let i = 0;
  let num = 0;
  while (true) {	  
	console.log(`Enter even number: ${args[i]}`);
    num = Number(args[i]);
    if (num % 2 == 0)
      break; // even number -> exit from the loop
    console.log("Invalid number!");
    i++;
  }
  console.log(`Even number entered: ${num}`);
}