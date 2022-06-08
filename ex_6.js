//compozitia unui numar inf de fct
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const inc = x => x + 1
const sqr = x => x * x
const div = x => x / 2

console.log(compose(inc, sqr, div)(6));