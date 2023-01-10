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

//exoQuatre();

function exoCinq(){
    let cote1 = Number(prompt("Entrez un coté du triangle"));
    let cote2 = Number(prompt("Entrez un autre coté du triangle"));
    let hypothenuse = Math.sqrt(Math.pow(cote1,2) + Math.pow(cote2,2)).toFixed(2);
    console.log(`L'hypothénuse d'un triangle rectangle qui a pour côté ${cote1} et ${cote2} est de ${hypothenuse}`);
}

//exoCinq();

function exoSix(){
    let prix = Number(prompt("Entrez un prix"));
    let tva = Number(prompt("Entrez une TVA"));
    let prixTTC = prix + (prix*tva/100);
    let prixTVA = prix*tva/100;
    console.log(`Pour un objet qui coute ${prix} avec une tva égale à ${tva} , le cout de la tva appliquée à l'objet sera de ${prixTVA} et donc l'objet coutera ${prixTTC} TTC`);
}

//exoSix();