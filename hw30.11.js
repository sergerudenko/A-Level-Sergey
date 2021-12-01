// Массив больше 3-х но меньше 10-ти
let array = [2, 5, 9, 15, 0, 4]

array.forEach(function (item) {
  if (item > 3 && item < 10){
    console.log(item)
  }
})

// Сумма положительных элементов массива
let array = [-2, 5, -9, 15, 0, -4]
  const result = array.reduce((sum, cur) => {
    if (cur > 0) {
      sum += cur;
  }
  return sum;
},0)
console.log(result)

// Проверить есть ли в массиве элемент равный 4
let array = [1, 2, 5, 9, 4, 13, 4, 10]

array.forEach(function (item) {
  if (item === 4){
    
    console.log(true)
  }
})

// Дан массив с элементами, вставить "-"
let arr = [1,2,3,4,5,6,7,8,9]
let s = ''
arr.forEach(function(item){
  let x = String(item)
  let r = '-'
  s += '-'+ x
})
console.log(s+'-')

// Вывести на экран числа которые начинаются на 1,2,5
let array = [10,20,30,50,235,3000]
array.forEach(function(item) {
    let x = String(item)
    let r = x[0]
    if (r === '1' || r === '2' || r === '5'){
        console.log(item);
    }
})

// Вывести жирным выходные
let array = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
array.forEach(function(item){
  if (item === 'Сб'|| item === 'Вс'){
    console.log(item.bold())
  }else {
    console.log(item)
  }
})

// Вывести все дни недели, а текущий жирным
let array = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
array.forEach(function(item){
  let day = array[2]
  if (item === day){
    console.log(item.bold())
  }else {
    console.log(item)
  }
})

// Делить n на 2 пока не станет меньше 50, посчитать количество итераций
let n = 1000;
let num = 0;
do{
  n /= 2;
  num++;
}while (n > 50);
console.log (n)
console.log (num)

// Функция возвращает квадрат числа
function r(x){
    let t = x*x
    return t
}
let w = r(5)
console.log(w)

// Функция возвращает сумму чисел
function r(x,y){
    let t = x+y
    return t
}
let w = r(5,6)
console.log(w)

// Функция отнимает от первого второе и делит на третье
function r(x,y,z){
    let t = (x-y)/z
    return t
}
let w = r(10,2,2)
console.log(w)

// Выводит день недели от 1 до 7
let dict = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
    7: 'Вс',
  }
  function day(f){
    if(f<=7 && f>0){
    let w = dict[f]
    return w
  }else{
    return 'Выберите число от 1 до 7'
  }
  }
  console.log(day(9))