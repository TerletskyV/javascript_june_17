var arr = [];
function rand(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
var min = 0,
	max = 100,
	numIndex = 7;
/*
	Заполнение массива случайными числами
*/
for(i = 0; i < 30; i++){
	arr[i] = rand(min, max);
}
console.log(arr);
/*
	Поиск индекса числа numIndex в массиве
*/
for(var i = 0; i < arr.length; i++){
	if(arr[i] == numIndex){
	console.log("Индексы числа " + numIndex + " : " + i);
	}
}
/*
	Поиск чётных элементов в массиве
*/
for(var i = 0; i < arr.length; i++){
	if(arr[i] % 2 == 0){
		console.log("Индексы чётных элементов в массиве: " + i);
	}
}