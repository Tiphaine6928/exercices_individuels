const longueur = /.{8,}/;
const lettre = /[a-zA-Z]/;
const nombre = /[0-9]/;
const specialChar = /[^a-zA-Z0-9]/;
const password = "abcdefg";

if (
    longueur.test(password) &&
    nombre.test(password) &&
    lettre.test(password) &&
    specialChar.test(password)
) {
    console.log("Mot de passe valide : longueur suffisante et diversité de caractères.");
} else {
    console.log("Mot de passe invalide : il manque des critères.");
}