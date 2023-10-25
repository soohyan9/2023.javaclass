//2. Index position
const fruits = ['/사과', '/바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//6. forEach
fruits.forEach(function (fruit, index) {
    console.log(fruit)
})

//4. Adition, deletion, copy
// push: add an item to the end
fruits.push('/사과', '/복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);