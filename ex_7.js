//functie pentru tratarea variabilelor obiect

let pers = {
    nume: 'Radu',
    prenume: 'Manea'
};

(function () {
    console.log(pers.nume + ' ' + pers.prenume);
})(pers);