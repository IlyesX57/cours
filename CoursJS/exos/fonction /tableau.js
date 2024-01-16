


// Vous devrez créer un tableau avec dix éléments. Ce tableau devra être 
// stocké dans une variable intitulée MonTableau.
// Les éléments du tableau peuvent être n'importe quoi vos plats ou vos 
// groupes de musique préférés

// Ensuite, modifiez les deux premiers éléments du tableau en utilisant 
// ce que vous voulais
// Puis ajoutez un nouvel élément au début du tableau et un autre en 
// fin de tableau.

let MonTableau = [
    "Pizza",
    "Tacos",
    1234567890,
    "Dutroux",
    "Mark",
    "Epstein",
    1,
    2,
    3, 
    629595
]

MonTableau[0] = "Sushi"
MonTableau[1] = "Curry"

MonTableau.push("Budget")
MonTableau[MonTableau.length] = 7466532

MonTableau.unshift("Vegetables")

console.log(MonTableau)
console.log((((4+5)*6) / 2).toFixed(1))

// const Paye = parseInt(readline());
// const Heure = parseInt(readline());
// const Loyer = parseInt(readline());

// if (Paye * Heure > Loyer) {
//     console.log("YES")
// } else if (Paye * Heure == Loyer) {
//     console.log("BARELY")
// } else {
//     console.log("NO")
// }

if (nombre % 2) {
    console.log('[ ] ' + nombre)
} else {
    console.log('[x] ' + nombre)
}

console.log((nombre % 2 == 0 ? '[ ] ' : '[x] ') + nombre)

var x = ''
if (nombre % 2 == 0) {
    x = '[ ] '
} else {
    x = '[x] '
}
console.log(x + nombre)