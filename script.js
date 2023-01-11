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

function exoNeuf(){
    let age = Number(prompt("Entrez l'age"));
    let anciennete = Number(prompt("Entrez l'anciennete"));
    let dernierSalaire = Number(prompt("Entrez le dernier salaire"));
    
    let indemnite = 0;

    anciennete >= 1 && anciennete <10 ? indemnite += anciennete * (dernierSalaire /2 ) : indemnite += 10 * (dernierSalaire/2) + (anciennete-10) * dernierSalaire;

    age >= 46 && age <50 ? indemnite += 2*dernierSalaire : age >= 50 ? indemnite += 5*dernierSalaire : console.log("trop tot pour le bonus");

    console.log(indemnite);
}

exoNeuf();