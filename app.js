console.log("trivia game ")

// function  startgame(){
//     document.getElementById("txtbox").innerHTML=(this.data[0].txt)
//     console.log(data[0].txt)
// };   

let btn = document.querySelectorAll('.btn');
btn.onclick= function(){
    testing()
}
let testing =() =>{
    console.log('testing boyyyyy')
}


let diaplaytxt ={

};
  
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
        txt:' Begin round 2',
        slot1:'next',
        slot2:"next",
        slot3:'next',
        slot4:'next'
    },

]  
console.log(data);
//startgame()

console.log(data[0].txt)


let pts = document.querySelector(".pts");
let player1 = 0;
let player2 = 0;
let text = '';

let playerscore =(parm)=>{

}


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


//document.querySelector('.pts').innerHTML(player1);
