const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)

function destructivelyAppendCat(name){
    cats.push("Ralph")
    
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}
function appendCat(name){
    return cats.concat(name)
}
const newArray=append.Cat("Broom")

function prependCat(name){
    return [name].concat(cats)
}
function removeLastCat(name){
    return cats.slice(0,-1)
}




  



