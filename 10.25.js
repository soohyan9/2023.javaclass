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

// unshift: add an item to the benigging
fruits.unshift('딸기','레몬');
console.log(fruits);

//shift: remove an item from the begging
// note!! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('/사과', '/복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '/청사과', '/수박',)
console.log(fruits);

//combine two arrays
const fruits2 = ['/서양배', '/코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// IndexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('/사과'));
console.log(fruits.indexOf('/수박'));
console.log(fruits.indexOf('/코코넛'));

//includes
console.log(fruits.includes('/수박'));
console.log(fruits.includes('/코코넛'));

// lasIndexOf
fruits.push('/사과');
console.log(fruits);
console.log(fruits.indexOf('/사과'));
console.log(fruits.lastIndexOf('/사과'));

//9강 배열함수

//Q1.make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = '/사과, /키위, /바나나, /체리';
    const result = fruits.split(',');
    console.log(result);
}
