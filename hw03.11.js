// Функция считает и выводит колличество своих вызовов
function counter() {
	let i = 1;
	return function(){
    return i++};
}

let func = counter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());

// Функция создает рандомное число от 1 до 100 и записывает его
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1,101))

