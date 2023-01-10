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

exoDeux();