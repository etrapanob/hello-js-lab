// numbers
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
let evenNumbers = [];
for(let i = 0; i < numbers.length; i++)
{
  if(numbers[i] % 2 == 0)
  {
    evenNumbers.push(numbers[i]);
  }
}    // TODO: assign to an array containing only the even numbers
let oddNumber = [];
for(let i = 0; i < numbers.length; i++)
{
  if(numbers[i] % 2 == 1)
  {
    oddNumber.push(numbers[i]);
    break;
  }
}       // TODO: assign to the first odd number
let largestNumber = 1;
for(let i = 0; i < numbers.length; i++)
{
  if(numbers[i] > largestNumber)
  {
    largestNumber = numbers[i];
  }
}
    // TODO: assign to the largest number
console.log('evenNumbers:', evenNumbers);
console.log('oddNumber:', oddNumber);
console.log('largestNumber:', largestNumber);

// strings
const strings = ["this", "is", "a", "collection", "of", "words"];
let onlyIs;    // TODO: assign to an array with only the string containing the substring `is`
let longestWord = "";
for(let i = 0; i < strings.length; i++)
{
  if(strings[i].length > longestWord.length)
  {
    longestWord = strings[i];
  }
}  
// TODO: assign to the longest word in strings
console.log('onlyIs:', onlyIs);
console.log('longestWord:', longestWord);

// objects
const orders = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];
let allPrices = [];
for(let i = 0; i < orders.length; i++)
{
  allPrices.push(orders[i].price);
}      // TODO: an array with only the price values from all of the orders
let pendingOrders = [];
for(let i = 0; i < orders.length; i++)
{
  if(orders[i].status == "pending")
  {
  pendingOrders.push(orders[i])
  }
}  // TODO: an array containing only the orders that are pending
let total = 0;
for(let i = 0; i < orders.length; i++)
{
  total += orders[i].price;
}          // TODO: the total sum of all the prices
console.log('allPrices:', allPrices);
console.log('pendingOrders:', pendingOrders);
console.log('total:', total);