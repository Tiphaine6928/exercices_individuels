function checkPassword() {

    const password = document.getElementById("password").value;
    const strengthIndicator = document.getElementById("strength-indicator");

    const longueur = /.{8,}/;
    const minuscule = /[a-z]/;
    const majuscule = /[A-Z]/;
    const nombre = /[0-9]/;
    const specialChar = /[^a-zA-Z0-9]/;

    let score = 0;
    if(longueur.test(password)) score++;
    if(nombre.test(password)) score++;
    if(minuscule.test(password)) score++;
    if(majuscule.test(password)) score++;
    if(specialChar.test(password)) score++;

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

    if (score <= 2) {
        strengthIndicator.textContent = "Sécurité : Faible";
        strengthIndicator.className = "strength-indicator weak";
      } else if (score === 3 || score === 4) {
        strengthIndicator.textContent = "Sécurité : Moyenne";
        strengthIndicator.className = "strength-indicator medium";
      } else {
        strengthIndicator.textContent = "Sécurité : Forte";
        strengthIndicator.className = "strength-indicator strong";
      }
}