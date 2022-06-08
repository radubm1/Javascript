//functie pentru currying

let trnsf = function(f){
    return function(a){
        return function(b){
            return f(a,b)
        }
    }
}

let sum = function(a,b){
    return a+b
}

let fct = trnsf(sum);

console.log(fct(2)(3));
