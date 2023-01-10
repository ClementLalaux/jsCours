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

exoTrois();
