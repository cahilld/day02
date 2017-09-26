function fizzBuzz(i) {
    var f=i%3==0, b=i%5==0;
    return f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i;
}