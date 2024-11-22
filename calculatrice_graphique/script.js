let entete = document.getElementById("entete");
let valeur1 = "";
let valeur2 = ""; 
let operateur = ""; 
let resultat = "";

entete.innerText = "0";

function ajouter(val) {
    if (operateur) {
        if ((val == "00" && valeur2) || val !== "00") {
            valeur2 += val;
            entete.innerText = valeur1 + operateur + valeur2;
        }
    } else if (val == "00" && valeur1) {
        valeur1 += val;
        entete.innerText = valeur1;
    } else {
        if (valeur1 == "0" && val !== ".") {
            valeur1 = val;
        } else {
            valeur1 += val;
        }

        entete.innerText = valeur1;
    }
}

function ajoutOperateur(opt) {
    if (!valeur2) {
        if (valeur1) {
            operateur = opt;

            entete.innerText = valeur1 + operateur;
        } else if (opt == "-") {
            valeur1 = opt;
            entete.innerText = valeur1;
        }
    }
}