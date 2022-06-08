//functie auto-apelanta/recursivitate

function inc(number) {
    const sum = number + 1;
    if (sum < 10) {
        console.log(number);
        inc(sum);
    }
}
inc(0);