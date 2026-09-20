function nombresPairs(nombres) {
    return nombres.filter(element=>{
        return element%2===0
    })
}
console.log(nombresPairs([1,2,3,4,5,6]))
function multroi(nombres) {
    return nombres.filter(element=>{
        return element%3===0
    })
}
console.log(multroi([1,2,3,4,5,6]))
function nbrpositiv(nombres) {
    return nombres.filter(element=>{
        return element>=0
    })
}
console.log(nbrpositiv([1,-2,3,4,-5,6]))
function longueurPaire(nombres) {
    return nombres.filter(element=>{
        return element.length%2===0
    })
}
console.log(longueurPaire(["chat","chien","lion"]))