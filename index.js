// Outline The Project Structures
const prompt = require('prompt-sync')()
//read the current page
function showPage(page){
    console.log(page.text)

    page.choices.forEach((choice,index) => {
        console.log('(${index + 1} ${choice}')
    });


    console.log('You walk out the door')
    console.log('(1) You walk out the door to the left')
    console.log('(2) You walk out the door to the right')    
}
//wait for user to make a choise (prompt)

function getUserChoice(){
const choice=prompt('')

}

//handle the outcome of the choice
function handleChoice(choice){
    if(choice == 1){
    console.log('You trip')
    }
  else if (choice == 2) {
    console.log('You die') 
        }
    else {
    console.log('You die')
    }
}
             
class Page {
constructor(text,choices = []){
    this.text=text
    this.choices=choices
    }
}
const page = new Page ('You are dead')

class Choice {
    constructor(text, action){
this.text=text
this.action=action

    }
}

showPage()
const choice = getUserChoice()
handleChoice(choice)

//Anytime you have one thing you want to treat as more than one thing it must be an array or an object