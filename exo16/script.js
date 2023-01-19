let boutonSaisie = document.querySelector("#saisir");
let boutonMax = document.querySelector("#meilleur");
let boutonMin = document.querySelector("#moyenne");
let boutonMoy = document.querySelector("#pire");

let moyenne = 0;
let max = 0;
let min = 20;
let ecrire = 0;
let nombreNote = 0;


boutonSaisie.addEventListener('click', () => {

    let ul = document.querySelector('ul');
    let nbNotes = Number(prompt('Combien de notes voulez vous ?'));
    for(let i=0; i< nbNotes;i++){
        ecrire = Number(prompt('Entrez une note'));
        if(ecrire<min){
            min = ecrire;
        }
        if(ecrire>max){
            max = ecrire;
        }
        moyenne += ecrire;
        nombreNote ++;
        ul.innerHTML = ul.innerHTML + `<li>${ecrire}</li>`
    }
})


boutonMax.addEventListener('click', () => {
    if(max != 0){
        document.getElementById('liMeilleure').innerText = `La meilleur note est de ${max}`;
    } else {
        alert("La meilleure note semble être 0 , avez vous rentrer des notes ?")
    }
})

boutonMin.addEventListener('click', () => {
    if(min != 20){
        document.getElementById('liPire').textContent = `La pire note est de ${min}`;
    } else {
        alert("La pire note semble être 20 , avez vous rentrer des notes ?")
    }
})

boutonMoy.addEventListener('click', () => {
    if(moyenne != 0){
        document.getElementById('liMoyenne').innerText = `La moyenne des notes est de ${moyenne/nombreNote}`;
    } else {
        alert("Avez vous entrez les notes ?")
    }
})


let objC = [];
let id = 0;


let select = document.querySelector("#selectC");
let boutonC = document.querySelector("#validC");
let nomC = document.querySelector("#nomC");
let raceC = document.querySelector("#raceC");
let ageC = document.querySelector("#ageC");
let textC = document.querySelector("#textC");

boutonC.addEventListener('click', () => {
    let chien = {
        id:0,
        nom:"",
        race:"",
        age:0
    }
    chien.id = ++id;
    chien.nom = !(null) ? nomC.value : "pas de valeur";
    chien.race = !(null) ? raceC.value : "pas de valeur";
    chien.age = !(null) ? ageC.value : -1;
    objC.push(chien);
    select.options[select.options.length] = new Option(chien.nom,chien.id);
})

select.addEventListener("change", () => {
    textC.innerText = `Vous avez choisi ${objC[select.value-1].nom} qui est de la race ${objC[select.value-1].race} et qui a ${objC[select.value-1].age} ans`
    console.log(objC[select.value-1].nom); 
    console.log(objC);
});