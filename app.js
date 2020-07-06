console.log("trivia game ")
//   all trivia questions from https://www.triviaquestionsnow.com/
// =================================================================
let data =[
    {
        txt:'In what year was the first Harry Potter movie released',
        slot1:2001,
        slot2:1994,
        slot3:2003,
        slot4:1864
    },
    {
        txt:'What is the name of Harry Potter\'s godfather',
        slot1:"sirius black",
        slot2:'Mat Damon',
        slot3:'pikachu',
        slot4:'Bernie Sanders'
    },
    {
        txt:'Who usually decides which house at Hogwarts students are to belong to',
        slot1:'The Sorting Hat',
        slot2:'The student',
        slot3:'Harry potter',
        slot4:'Dennis Rodman'
    },
    {
        txt:'What area lies to the west of Hogwarts Castle',
        slot1:'The Forbidden Forest',
        slot2:'Disney world',
        slot3:'vegas',
        slot4:'all of the above'
    },
    {
        txt:'Which Harry Potter character used to own a Firebolt',
        slot1:'Harry Potter',
        slot2:'Donald Duck',
        slot3:'The Power Puff Girls',
        slot4:'Hermione Granger'
    },
    {
        txt:' Begin round 2 Videogame trivia',
        slot1:'START ROUND',
        slot2:"START ROUND",
        slot3:'START ROUND',
        slot4:'START ROUND'
    },
    {
        txt:'Which videogame is generally considered to be the orginal third-person shooter?',
        slot1:'Wolfenstein 3D',
        slot2:'forza',
        slot3:'halo',
        slot4:'south park stick of truth'
    },
    {
        txt:'What was the first videogame to feature basketball legend Michael Jordan?',
        slot1:'Jordan vs Bird',
        slot2:'nba 2k 2020',
        slot3:'nba live',
        slot4:'nba street'
    },
    {
        txt:'The playstation was first designed as a companion to this gaming console',
        slot1:'Super Nintendo',
        slot2:'Sega Dreamcast',
        slot3:'PS5',
        slot4:'Sega Genesis'
    },
    {
        txt:'When did the playstation first hit store shelves in japan?',
        slot1:'1994',
        slot2:'1984',
        slot3:'1876',
        slot4:'2020'
    },
    {
        txt:'What year was the Playstation 2 released?',
        slot1:'2000',
        slot2:'1990',
        slot3:'2020',
        slot4:'1985'
    },

]  
//   all trivia questions from https://www.triviaquestionsnow.com/
// =================================================================
// above i used and array of objects to hold my questions and answers
console.log(data);
console.log(data[0].txt)
 

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

//created a variable for player 1 score
let player1 = 0;

//created a variable for player 2 score
let player2 = 0;
let questions = data.length;

// for(i=o;i<data.length;i++){
// document.write(data[i]);
// };
//
//created a function to put out promt messages to the user
let playerinput = (userMessage)=>{
    return prompt(userMessage);
};
//document.getElementById('btn4').innerHTML = 'tech with chris';
// let startgame =()=>{
//     playerinput('Welcome to the trivia game start game or cancle ')
//     if(startgame == "start game"){
//         let firstquest = playerinput(data[0].txt)
//     }else{
//         alert('gameover')
//     }
// };

// question /////////////////////////////////
let firstquest = playerinput(data[0].txt)
console.log(player1)
if (firstquest == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score ' + player1)
    playerinput('question 2 ' + data[1].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score ' + player1)
    playerinput('question 2 ' + data[1].txt);
} 

// question  /////////////////////////////////
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 3 ' + data[2].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 3 ' + data[2].txt);
} 

// question  /////////////////////////////////
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 4 ' + data[3].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 4 ' + data[3].txt);
} 


// question  /////////////////////////////////
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 5 ' + data[4].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 5 ' + data[4].txt);
} 

if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('ROUND 2  ' + data[5].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('ROUND 2 ' + data[5].txt);
} 
if (data[5].slot1 == "START ROUND"){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[6].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[6].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[7].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[7].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[8].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[8].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[9].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[9].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[10].txt);
}else{
    alert('wrong answer')
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 7 ' + data[10].txt);
} 
//player one 











let firstquest = playerinput(data[0].txt)
console.log(player1)
console.log(player2)
if (firstquest == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score ' + player2)
    playerinput('question 2 ' + data[1].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score ' + player2)
    playerinput('question 2 ' + data[1].txt);
} 


if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 3 ' + data[2].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 3 ' + data[2].txt);
} 

// question  /////////////////////////////////
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 4 ' + data[3].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 4 ' + data[3].txt);
} 


// question  /////////////////////////////////
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 5 ' + data[4].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 5 ' + data[4].txt);
} 

if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('ROUND 2  ' + data[5].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('ROUND 2 ' + data[5].txt);
} 
if (data[5].slot1 == "START ROUND"){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[6].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[6].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[7].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[7].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[8].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[8].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player1)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[9].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[9].txt);
} 
if (data[0].slot1 == 2001){
    alert('correct great job')
    player2 ++
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[10].txt);
}else{
    alert('wrong answer')
    console.log(player2)
    alert('player one score' + player2)
    playerinput('question 7 ' + data[10].txt);
} 




if (player1 > player2){
    alert('player 1 wins')
    
}else if(player2 > player1) {
    alert('player 2')
}else{
    alert(' TIE GAME')
    
};










//startgame();