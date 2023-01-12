function exoUn(){
    let prenom = prompt("Ecrivez votre prénom : ");
    let nom = prompt("Ecrivez votre nom : ");
    console.log(`Bonjour ${nom} ${prenom}`);
}

//exoUn();

function exoDeux(){
    let nbA = prompt("Ecrivez un nombre a : ");
    let nbB = prompt("Ecrivez un nombre b : ");
    let res = parseFloat(nbA) + parseFloat(nbB);
    console.log(`${nbA} + ${nbB} = ${res}`);
}

//exoDeux();

function exoTrois(){
    let diametre = Number(prompt("Entrez un rayon"));
    let perimetre = Math.PI * diametre;
    let aire = Math.PI * Math.pow((diametre/2),2);
    console.log(`Le perimetre d'un cercle de diametre ${diametre} est de ${perimetre} et l'aire est de ${aire}`);
}

//exoTrois();

function exoQuatre(){
    let cote = Number(prompt("Entrez un coté"));
    let perimetre = cote * 4;
    let aire = cote * cote;
    console.log(`Le perimetre d'un carre de longueur ${cote} est de ${perimetre} et l'aire est de ${aire}`);
}

function exoQuatreBis(){
    let cote1 = Number(prompt("Entrez un coté A"));
    let cote2 = Number(prompt("Entrez un coté B"));
    let perimetre = cote1 * 2 + cote2 * 2;
    let aire = cote1 * cote2;
    console.log(`Le perimetre d'un rectangle de longueur ${cote1} et largeur ${cote2} est de ${perimetre} et l'aire est de ${aire}`);
}

//exoQuatreBis();

function exoCinq(){
    let cote1 = Number(prompt("Entrez un coté du triangle"));
    let cote2 = Number(prompt("Entrez un autre coté du triangle"));
    let hypothenuse = Math.sqrt(Math.pow(cote1,2) + Math.pow(cote2,2)).toFixed(2);
    console.log(`L'hypothénuse d'un triangle rectangle qui a pour côté ${cote1} et ${cote2} est de ${hypothenuse}`);
}

function carreOuRectangle(){
    let unOuAutre = prompt("Entrez 'carre' pour la fonction carre et 'rectangle' pour la fonction rectangle")
    unOuAutre === "carre" ? exoQuatre() : unOuAutre === "rectangle" ? exoQuatreBis() : console.log("Pas le bon texte entré");
}

//carreOuRectangle();

//exoCinq();

function exoSix(){
    let prix = Number(prompt("Entrez un prix"));
    let tva = Number(prompt("Entrez une TVA"));
    let prixTTC = prix + (prix*tva/100);
    let prixTVA = prix*tva/100;
    console.log(`Pour un objet qui coute ${prix} avec une tva égale à ${tva} , le cout de la tva appliquée à l'objet sera de ${prixTVA} et donc l'objet coutera ${prixTTC} TTC`);
}

//exoSix();

function exoSept(){
    let mailV = "azerty@hotmail.fr"
    let mdpV = "azerty"
    let mail =prompt('Entrez un mail');
    let mdp =prompt('Entrez un mdp');
    mailV === mail ? (mdpV === mdp ? console.log('vous etes connecte') : console.log('Pas le bon mdp mais email correct')) 
    : (mdpV === mdp ? console.log('Mauvais mail mais bon mdp') : console.log('Rien de bon'));
}

//exoSept();

function exoHuit(){
    let mot = prompt("Entrez un mot");
    let i = 0;
    while(mot[i] === mot[mot.length - 1 - i] && i < mot.length){
        i++;
    }
    i == mot.length ? console.log('Palindrome') : console.log('Pas palindrome');
}

//exoHuit();

function exoHuitBis(){
    let mot = prompt("Entrez un mot");
    let motReverse = "";
    for(let i = 0 ; i < mot.length; i++){
        motReverse += String(mot[mot.length-i-1]);
    }
    mot == motReverse ? console.log("palindrome") : console.log("pas palindrome");
}

//exoHuitBis();

function exoNeuf(){
    let age = Number(prompt("Entrez l'age"));
    let anciennete = Number(prompt("Entrez l'anciennete"));
    let dernierSalaire = Number(prompt("Entrez le dernier salaire"));
    
    let indemnite = 0;

    anciennete >= 1 && anciennete <10 ? indemnite += anciennete * (dernierSalaire /2 ) : indemnite += 10 * (dernierSalaire/2) + (anciennete-10) * dernierSalaire;

    age >= 46 && age <50 ? indemnite += 2*dernierSalaire : age >= 50 ? indemnite += 5*dernierSalaire : console.log("trop tot pour le bonus");

    console.log(indemnite);
}

//exoNeuf();

function exoDix(){
    let menu = prompt(`Choississez parmi le menu suivant : 
    1 - Eau 
    2 - Jus d'orange 
    3 - Limonade  
    4 - Café  
    5 - Thé` ).toLowerCase();

    switch (true){
        case menu == "1" || menu == "eau" :
            console.log("Vous avez choisi de l'eau");
            break;
        case menu =="2" || menu =="jus d'orange":
            console.log("Vous avez choisi du jus d'orange");
            break;
        case menu =="3" || menu =="limonade":
            console.log("Vous avez choisi de la limonade");
            break;
        case menu =="4" || menu =="café":
            console.log("Vous avez choisi du café");
            break;
        case menu =="5" || menu =="thé":
            console.log("Vous avez choisi du thé");
            break;
        default :
            console.log("Le choix n'est pas possible")
    }
}

//exoDix();

function exoOnze(){
    let montantNet = Number(prompt("Entrez le montant net"));
    let nbAdultes = Number(prompt("Entrez le nombre d'adultes"));
    let nbEnfants = Number(prompt("Entrez le nombre d'enfants"));
    let nbParts;
    let impot = 0;

    nbParts = nbEnfants <= 0 ? nbAdultes : nbEnfants <= 2 ? nbAdultes + (nbEnfants/2) : nbAdultes + (nbEnfants - 2) + 1;
    montantNet = Math.round(montantNet / nbParts);

    switch(true){
        case montantNet >= 168995 :
            impot = impot + Math.round((montantNet-168995) * 45 / 100);
            montantNet = 168994;
        case montantNet >= 78571 && montantNet <= 168994 :
            impot = impot + Math.round((montantNet-78571) * 41 / 100);
            montantNet = 78570;
        case montantNet >= 27479 && montantNet <= 78570 :
            impot = impot + Math.round((montantNet-27479) * 30 / 100);
            montantNet = 27478;
        case montantNet >= 10778 && montantNet <= 27478 :
            impot = impot + Math.round((montantNet-10778) * 11 / 100);
            break;
        default:
            console.log("Vous n'êtes pas imposable");
    }
    impot = impot * nbParts;
    console.log(impot);
}

//exoOnze();

function exoDouze(){
    let nbHabitant = 96806;
    let nbHabitantF = 120000;
    let taux = 0.89
    let i = 0;
    while(nbHabitant < nbHabitantF){
        nbHabitant = nbHabitant + (nbHabitant * (taux/100));
        i++;
    }

    console.log(`Il faut ${i} années pour dépasser le seuil de ${nbHabitantF} habitants avec un taux de croissance de ${taux} % et atteindre ${nbHabitant} habitants`);
}

//exoDouze();

function exoTreize(n){
    let sum = 0;
    let txt = "";

    for(let i = 1 ; i <= n/2;i ++ ){
        j=i;
        txt = `${n} = `
        while(sum <= n){
            sum = sum + j;
            txt = txt + " " +  j;
            j++;
            if(sum == n){
                console.log(txt);
                break;
            }
        }
        txt = "";
        sum = 0
    }
}

//exoTreize(45);

function exoQuatorze(){
    let max = 0;
    let min = 20;
    let moyenne = 0;
    let i = 0;
    let valeur = Number(prompt('Entrez une valeur , si vous souhaitez arreter , entrez -1'));
    while(valeur != -1 ){
        valeur > max ? max = valeur : null;
        valeur < min ? min = valeur : null;
        moyenne = moyenne + valeur;
        i++;
        valeur = Number(prompt('Entrez une valeur , si vous souhaitez arreter , entrez -1'));
    }
    console.log(`La meilleure note est de ${max} , la pire note est de ${min} et la moyenne est de ${moyenne/i}`);
}

//exoQuatorze();

// let semaine = Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche")

// for(let i=0;i<semaine.length;i++){
//     console.log(semaine[i]);
//     if(i<4 && i>0){
//         console.log("Debut de la semaine");
//     }
    
// }
// let prenom = ["Adam", "Etienne", "Sebastien", "Clement", "Virginie"];

// for(p in prenom){
//     console.log(prenom[p]);
// }

// let z = 0;
// while(z < prenom.length){
//     console.log(prenom[z]);
//     z++;
// }

let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

// Nom et prénom //

function nomPrenom(tab){
    for(let t of tab){
        let aff = ""
        for(j in t){
            if(j == "prenom" || j == "nom"){
                aff = aff + t[j] + " ";
            } 
        }
        console.log(aff);
    }
}

//nomPrenom(etudiants);

// Matières et notes //

function matiereNote(tab){
    for(let t of tab){
        for(j in t){
            if(j == "prenom" || j == "nom"){
                console.log(t[j]);
            } 
            if(j == "matieres"){
                let matieres = t[j];
                for(m in matieres){
                    console.log(m + " : " + matieres[m]);
                }
            }
        }
        console.log("--------------");
    }
}

//matiereNote(etudiants);

function moyenne(tab){
    for(let t of tab){
        let aff = ""
        for(j in t){
            if(j == "prenom" || j == "nom"){
                aff = aff + t[j] + " ";
            } 
            if(j == "matieres"){
                let matieres = t[j];
                let moyenne = 0;
                let nb = 0;
                for(m in matieres){
                    moyenne = moyenne + matieres[m];
                    nb++;
                }
                moyenne = (moyenne/nb);
            aff = aff + " a " + (moyenne) + " de moyenne";
            }
        }
        console.log(aff);
        console.log("--------------");
    }
}

moyenne(etudiants);