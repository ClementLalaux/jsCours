let numAlea = Math.round(Math.random()*1000);
let soumettre = document.querySelector('#btn-submit');
let valeurSoumise = document.querySelector('#valeur');
let reponse = document.querySelector('#reponse')

soumettre.addEventListener('click', () => {

    if(valeurSoumise.value > numAlea){
        reponse.innerText = "Votre valeur est trop grande";
    } else if (valeurSoumise.value < numAlea){
        reponse.innerText = "Votre valeur est trop petite";
    } else{
        reponse.innerText = "Vous avez trouvé la réponse";
    } 

})  