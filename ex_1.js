//functie imbricata(nested)

let c = function(){
    var a=2,
    b=1;
    function sum(){
        return a+b;
    }
    return sum();
}
console.log(c());
