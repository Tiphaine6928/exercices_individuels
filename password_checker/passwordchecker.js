const longueur = /.{8,}/;
const minuscule = /[a-z]/;
const majuscule = /[A-Z]/;
const nombre = /[0-9]/;
const specialChar = /[^a-zA-Z0-9]/;
const password = "P@ssword123";

if (
    longueur.test(password) &&
    nombre.test(password) &&
    minuscule.test(password) &&
    majuscule.test(password) &&
    specialChar.test(password)
) {
    console.log("Mot de passe valide : longueur suffisante et diversité de caractères.");
} else {
    console.log("Mot de passe invalide : il manque des critères.");
}