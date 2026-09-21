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
function nombresImpairs(nombres) {
    return nombres.filter(element =>{
        return !(element%2===0)
    })
}
console.log(nombresImpairs([1,2,3,4,5,6]))
function  nombresNegatifs(nombres) {
    return nombres.filter(element =>{
        return element<0
    })
}
console.log( nombresNegatifs([1,-2,3,-4,-5,6]))
function  superieursASix(nombres) {
    return nombres.filter(element =>{
        return element>6
    })
}
console.log( superieursASix([1,6,5,11,7,8,14]))
let mots = 'The quick brown fox jumps over the lazy dog'.split(' ');
function commenceParCaractere(chaines, caractere) {
    return chaines.filter((element,i)=>{
        return element[0].toUpperCase()===caractere.toUpperCase()
    })
}
console.log(mots)
console.log(commenceParCaractere(mots,"q"));
console.log(commenceParCaractere(mots,"t"));
function indexPairEtLongueurPaire(chaines) {
    return chaines.filter((element,i)=>{
        return element.length%2===0 && i%2===0
    })
}
console.log(indexPairEtLongueurPaire(['lion','monkey','aardvaark','cat','doge']))


function deplacerZeros(nombres) {
    let nbrsanszero= nombres.filter(element=>{return element!==0})
    let zero= nombres.filter(element=>{return element===0})
    return [...nbrsanszero,...zero]
    
}
console.log(deplacerZeros([2,0,3,0,40,3,6,0,10,11]))