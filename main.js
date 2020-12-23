/* FOR OF */

// let fruits = ['apple', 'banana', 'orange', 'pineapple'];
// console.log('Today I ate: ');

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// /* FOR IN */

// let rating = ['shahin', 'rashad', 'rustam', 'rasim', 'yusif'];
// console.log('Student Rating: ');

// for (let person in rating) {
//     console.log(`${parseInt(person) + 1} place: ${rating[person]}`);
// }

// /* WHILE */

// let teaVolume=200;
// console.log ('You poured ' + teaVolume + ' ml of tea');
// while (teaVolume > 0) {
//     teaVolume-=10;
//     console.log('Left in glass ' + teaVolume + ' ml of tea');
// }
// console.log(`You've drinken whole glass`);

/*CONTINUE + FOR OF + .PUSH */

//let cards = ['2', 'King', 'Toss', '5', '6', 'King', 'Dame'];
//let hand = [];

//for (let card of cards) {
//    if (card !=='King' && card !=='Toss') continue;
//    hand.push(card);
//    console.log('Card ' + card + ' added to hand');
//}
//console.log('Card in hand :' + hand); 

/* Break + Ternar function */

// let cards = ['2', 'King', 'Toss', '5', '6', 'King', 'Dame'];

// console.log ('Searching for Dame in colods...');

// let found = false;

// for (let card of cards) {
//     console.log(`From colods were taken ${card}`);
//     if (card==='Dame') {
//         found=true;
//         break;
//     }
// }

// console.log(found?'We have found Dame!' : 'There is no Dame in colods:(');

// function printWeekDay() {
//     let dayIndex = new Date().getDay();
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     console.log(`Today is ${days[dayIndex]} `);
// }
// printWeekDay();

/* FUNCTION WITH ONE ARGUEMENT */

// function greet(who) {
//     console.log(`Hello, ${who}`);
// }

// greet ('Petya');
// greet ('Masha');
// greet ('Vasya');

/* FUNCTION WITH TWO ARGUEMENT */
// let myCards = ['2', 'King', '5', '6', 'King', 'Dame', 'Toss'];
// function findCard(cards, wantedCard='Toss') {
//     console.log('Searching card in colods...' + wantedCard)
//     let found=false;
//     for (let card of cards) {
//         console.log(`From colods were taken ${card}`);
//         if (card===wantedCard){
//             found=true;
//             break;
//         }
//     }
//     console.log(found?`We have found card ${wantedCard}`: `There are no wanted card ${wantedCard}`);
// }

// findCard(myCards);
// findCard(myCards, '5');

/*FUNCTION with RETURNS*/

// function checkAdult(age) {
//     console.log(`You are ${age}`);
//     if (age>=18) return;
//     console.log('Schoolboy!');
//     console.log(`You should wait ${18-age} years more until you are adult`);

// }
// checkAdult(2);
// checkAdult(23);
// checkAdult(18);

/*OBJECT OPERATIONS */

// let name ='Shahin';
// let surname='Safaroff';

// let me = {
//     name,
//     surname,
//     birthdate:{year:1986, month:9, day:20},
//     occupation: 'DevSecOps',
//     married: false,
// };

// me.education ='ASOA';
// me.occupation='Student';
// let myName = me.name;
// let myBirthYear=me.birthdate.year;

// console.log(myName);
// console.log(me);
// console.log(myBirthYear);

// let name = '';
// let surname='';
// function getFullName(){
//     return this.name + '' + this.surname;
// }

// let object={name, surname, getFullName};
// console.log(object.getFullName());

// object.whoAmI=function(){
//     console.log(`My name is ${this.name} ${this.surname}`)
// };

// object.whoAmI();

// console.log(object.getFullName());



/*THIS METHOD*/

// let me = {
//     birthDate:{year:1986, month:9, day:20},
//     getAge: function(){
//         let now = new Date();
//         let born = new Date (
//             this.birthDate.year,
//             this.birthDate.month + 1,
//             this.birthDate.day);

//         let diffinMilliSeconds=now.getTime()- born.getTime();
//         return Math.floor(diffinMilliSeconds/1000/60/60/24/365.25);
//     }
// };
// console.log(me.getAge());


// let obj = { model:'VW Polo'};
// let otherObj = obj;

// otherObj.model='VolksWagen Polo';

// console.log(obj);
// console.log(otherObj);


let me = { name:'Shahin',};

// let newMe = Object.assign(me, {name: 'Sharaka'}, {surname: 'Shyamalan'});

//let newMe = Object.assign({}, me,{name:'Sharaka', surname:'Shyamalan'});

let newMeWithSpread = {...me, name:'Sharaka', surname: 'Shyamalan'};

//console.log(newMe);
console.log(me);
//console.log(me===newMe);
console.log(newMeWithSpread);
console.log(me===newMeWithSpread);



