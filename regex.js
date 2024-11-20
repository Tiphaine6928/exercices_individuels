// Etape 1

const str1 = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

const exp1 = /\bde\b/g;

console.log(str1.match(exp1).length);

// Etape 2

const str2 = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

const exp2 = /de | des/g;

console.log(str2.match(exp2).length);