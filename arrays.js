const shoppingList = ['pizza', 'chips', 'salsa', 'coffee'];
const cart = [];

// TODO: add 'apples' to the end of the shoppingList
shoppingList.push("apples");
// TODO: add 'bread' to the front of the shoppingList
shoppingList.unshift("bread");
// TODO: use indexOf to replace 'coffee' with 'tea'
var coffee_index = shoppingList.indexOf("coffee");
shoppingList[coffee_index] = "tea";
// TODO: use splice to replace `chips` and `salsa` with `rice` and `beans`
shoppingList.splice(2, 2, "rice", "beans");

// TODO: put the first and the last items from your shoppingList into your cart
cart[0] = shoppingList.shift();
cart[1] = shoppingList.pop();
// now let's see what we got
console.log('shoppingList:', shoppingList);
console.log('cart:', cart);