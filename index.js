// code your solution here
function saturdayFun(action){
    if (action == "bathe my dog")
    return "This Saturday, I want to bathe my dog!"
     else return "This Saturday, I want to roller-skate!"
}
function mondayWork(action = 'go to the office'){
    if(action == 'work from home')
    return "This Monday, I will work from home."
    else return "This Monday, I will go to the office."
}
function wrapAdjective(join = "*"){
    return function(word){
        return `${join} ${word} ${join}`
    }
}
function wrapAdjective(join= "||"){
    return function(word= "a dedicated programmer"){
        return`You are ${join}${word}${join}!`
    }
}
