console.log("trivia game ")
  
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
        slot1:'next',
        slot2:"next",
        slot3:'next',
        slot4:'next'
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
console.log(data);
console.log(data[0].txt)


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
let player1 = 0;
let player2 = 0;



let playerinput = (userMessage)=>{
    return prompt(userMessage);
};
  

// question /////////////////////////////////
let firstquest = playerinput(data[0].txt)
console.log(player1)
if (firstquest == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 2 ' + data[1].txt);
}else{
    alert('wrong answer')
    playerinput('question 2 ' + data[1].txt);
} 

// question  /////////////////////////////////
if (data[1].txt == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 3 ' + data[2].txt);
}else{
    alert('wrong answer')
    
    playerinput('question 3 ' + data[2].txt);
} 

// question  /////////////////////////////////
if (data[2].txt == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 4 ' + data[3].txt);
}else{
    alert('wrong answer')
    
    playerinput('question 4 ' + data[3].txt);
} 


// question  /////////////////////////////////
if (data[3].txt == 2001){
    alert('correct great job')
    player1 ++
    console.log(player1)
    alert('player one score' + player1)
    playerinput('question 5 ' + data[4].txt);
}else{
    alert('wrong answer')
    
    playerinput('question 5 ' + data[4].txt);
} 






