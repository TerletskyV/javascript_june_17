var arr    = [],
	arrRev = [];
function rand(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
var min = 0,
	max = 100,
	numIndex = 7;
/*
	Заполнение массива случайными числами
*/
 for(var i = 0; i < 10; i++){
 	arr[i] = [];
	for(var j = 0; j < 10; j++ ){
		arr[i][j] = rand(min, max);
	}
}
console.table(arr);

// for(var i = 0; i < arr.length; i++){
// 	arrRev[i] = [];
// 	for(var j = 0; j < arr.length; j++){
// 		arrRev[i][j] = arr[arr.length - 1 - i][arr.length - 1 - j];
// 	}
// }
// console.table(arrRev);

// var topSide = arr[0];
// var rightSide = [];
// for(var i = 1; i < arr.length - 1; i++){
// 	rightSide[i - 1] = arr[i][arr.length - 1];
// }
// var bottomSide = arr[arr.length - 1].reverse();
// var leftSide = [];
// for(var i = 1; i < arr.length - 1; i++){
// 	leftSide[i - 1] = arr[i][0];
// }
// leftSide.reverse();
// var perimArr = topSide.concat(rightSide, bottomSide, leftSide);
// console.log(perimArr);

// Triangle

// var triTop = arr[0];
// var triRigth = [];
// for(var i = 1; i < arr.length; i++){
// 	triRigth[i - 1] = arr[i][arr.length - 1];
// }
// var triDiag = [];
// for(var i = 1; i < arr.length - 1; i++){
// 	triDiag[i - 1] = arr[i][i];
// }
// triDiag.reverse();
// var arrTriangle = triRigth.concat(triDiag, triTop);
// console.log(arrTriangle);


/*
	Поиск индекса числа numIndex в массиве
*/
// for(var i = 0; i < arr.length; i++){
// 	if(arr[i] == numIndex){
// 	console.log("Индексы числа " + numIndex + " : " + i);
// 	}
// }

// 	Поиск чётных элементов в массиве

// for(var i = 0; i < arr.length; i++){
// 	if(arr[i] % 2 == 0){
// 		console.log("Индексы чётных элементов в массиве: " + i);
// 	}
// }

//Spiral

var lngSidesBorders  = [0, arr.length - 1],
	shrtSidesBorders = [1, arr.length - 2],
	resArr = [];
