function numbers1To100Text([arg1]) {
    let num = Number(arg1);
    let result = "";
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(num < 100 && num > 19){
        result += tens[Math.floor(num/10)];
        if(num % 10 != 0)
        result += " " + ones[num % 10];
    }
    else if(num < 10 && num >0){
        result = ones[num % 10];
    }
    else if (num > 9 && num < 20){
        result = teens[num%10];
    }
    else if(num == 100){
        result = "one hundred";
    }
    else{
        result = "invalid number";
    }
    console.log(result);
}

numbers1To100Text([10]);
numbers1To100Text([11]);
numbers1To100Text([8]);
numbers1To100Text([22]);
numbers1To100Text([50]);
numbers1To100Text([-23]);
numbers1To100Text([99]);
