//functie de tip clojure

let a = (function(){
    let b=0;
    return function(){b+=1; return b}
})()

console.log(a());
console.log(a());
console.log(a());