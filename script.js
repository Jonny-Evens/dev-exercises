//exercise 1//








//exercise 2//

let watchedSeries = ['black mirror', 'money heist', 'friends'];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = watchedSeries;
console.log('I watched ${watchedseries[1]}series, and ${mywatchedSeries[2]}');

watchedSeries.push('narcos');
watchedSeries.splice(0,0, 'suits')
watchedSeries.splice(1,1);
console.log(watchedSeries);

//exercise 3//

function convertToF(celsius) {
let fahrenheit = (celsius * (9/5)) + 32;
	return fahrenheit;
}
console.log(convertToF(30));


//exercise 4//

//
 let c; //value= 13
    let a = 34;
    let b = 21;

console.log(a+b) // 34+21
//prediction: the output will be 55, because 34 and 21 are numbers.
//actual: 55   
a = 2;
console.log(a+b) // 2+21
//predcition: the output will be 23, because 2 + 21 are numbers.
//actual: 23;
console.log(3 + 4 + '5');
//prediction: the output will be 75, because 3,4, and '5' are numbers.
//actual: 75

//exercise 5//

typeof(15)
//prediction: number
//actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: not applicable
// Actual: number

typeof("hello")
// Prediction: phrase
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 4
// Actual:  13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: johnny-5
// Actual: NaN

99 * "hello"
// Prediction: hello99
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: true
// Actual: false



//exercise 6//



5 + "34"
// Prediction: 39
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0.5
// Actual: 0

5 % 10
// Prediction: 0.5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: javascript

" " + " "
// Prediction: """"
// Actual: ' '

" " + 0
// Prediction:"0"
// Actual: '0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: 0
// Actual: -1

!true
// Prediction: true
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: "bob bill"
// Actual: NaN
