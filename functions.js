function fizzBuzz(number)
{
  if((number % 3 == 0) && (number % 5 == 0))
  {
    return "FizzBuzz";
  }
  else if(number % 3 == 0)
  {
    return "Fizz";
  }
  else if(number % 5 == 0)
  {
    return "Buzz";
  }
  else
  {
    return number;
  }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(13));