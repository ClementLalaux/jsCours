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
    if(select.value == ""){
        textC.innerText = "";
    } else {
        textC.innerText = `Vous avez choisi ${objC[select.value-1].nom} qui est de la race ${objC[select.value-1].race} et qui a ${objC[select.value-1].age} ans`;
    }

});