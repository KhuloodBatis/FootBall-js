'use strict';
/**
 * The Complete JavaScript Course 15
Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
 */

//!The Complete JavaScript Course 16
const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',

scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};




//! v-115
//?1) 


// for (const [i,player] of game.scored.entries()){
// console.log(`Goal ${i +1 }: ${player}`);
// }

//? 2)

// let avr = 0;
// const odds = Object.values(game.odds)
// for(const odd of odds ){
//   avr += odd;
//   // console.log(`The average: ${avr}`);
//   avr/= odds.length;
//   console.log(`The average: ${avr}`);
// }
//?3)

// for(const [team , odd] of Object.entries(game.odds)){
//   // console.log(team,odd);
//   const teamString = team ==='x'? 'draw':`victory ${game[team]}`
//   console.log(`Odd of ${teamString} ${odd}`);
// }

// //!1)
// const [players1 , players2] = game.players;
// console.log(players1 , players2);
// //!2
// // const fieldPlayers = [...game.players[0]];
// // const players1 = [`gk:${fieldPlayers}`];
// // console.log(players1);

// // const fieldPlayers2 = [...game.players[1]];
// // const players2 = [`gk:${fieldPlayers2}`];
// // console.log(players2);
// const [gk,...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);


// //!3
// // const allPlayers = players1.concat(players2);
// // console.log(allPlayers);

// const allPlayers = [...players1,...players2];
// console.log(allPlayers);
// //!4 
// const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']

// console.log(players1Final);

// //!5 

// const {odds:{team1, x:draw , team2}} = game;
// console.log(team1,draw,team2);

//!6
/**
 * 6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
 */

// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

// printGoals(...game.scored)

// //!7)
// //? here we use the logical no if 
// team1>team2 && console.log("team 1 is winner ");
// team1<team2 && console.log("team 2 is winner ");


//!=-=-=-=--=--chaleng#3 
const gameEvents = new Map([
  [17,'⚽ GOAL'],
  [36,'🔁 Substiution'],
  [47,'⚽ GOAL'],
  [61,'🔁 Substiution'],
  [64,'🟨 Yellow card'],
  [69,'🟥 Red card '],
  [70,'🔁 Substiution'],
  [72,'🔁 Substiution'],
  [76,'⚽ GOAL'],
  [80,'⚽ GOAL']
]);

//?1
const events = [...new Set(gameEvents.values())];
console.log(events);

//?2

gameEvents.delete(64);
console.log(gameEvents);

//?3

console.log(`An event happened,on average, every ${90/gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened,on average, every ${time/gameEvents.size} minutes`);

//?4

for (const [min,event] of gameEvents){
const half = min <= 45 ? 'FIRST': 'SECOND';
console.log(`[${half}HALF] ${min}: ${event}`);
}