let monObjet = [
    {
        nom : "LALAUX",
        prenom : "Clement",
        matiere : {
            francais : [10,15],
            mathematiques : [7,18]
        }
    },
    {
        nom : "VERHULST",
        prenom : "Matthieu",
        matiere : {
            francais : [9,12],
            mathematiques : [4,20]
        }
    }
];

let ajoutEleve = {
    nom : "",
    prenom : "",
    matiere : {
        
    }
}

let mesMatieres = ["francais","mathematiques"];

let ajoutMatiere = {
    
}

let selectPersonne = document.querySelector('#selection-eleve');
let selectPersonneBis = document.querySelector('#selection-eleve-bis');
let selectMatiere = document.querySelector('#selection-matiere');
let selectMatiereBis = document.querySelector('#selection-matiere-bis');
let nbMatiere = 1;
let btnAjoutEleve = document.querySelector('#btn-ajout-eleve');
let btnAjoutMatiere = document.querySelector('#btn-ajout-matiere');

const refreshPersonne = () => {
    selectPersonne.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
    selectPersonneBis.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
    monObjet.forEach(eleve => {
        selectPersonne.innerHTML += `<option value ="${monObjet.indexOf(eleve)+1}">${eleve.nom} ${eleve.prenom}</option>`;
        selectPersonneBis.innerHTML += `<option value ="${monObjet.indexOf(eleve)+1}">${eleve.nom} ${eleve.prenom}</option>`;
    });
}

const refreshMatiere = () => {
    selectMatiere.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
    selectMatiereBis.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
    for (const m of mesMatieres) {
        selectMatiere.innerHTML += `<option value="${mesMatieres.indexOf(m)+1}">${m}</option>`;
        selectMatiereBis.innerHTML += `<option value="${mesMatieres.indexOf(m)+1}">${m}</option>`;
    }
}

refreshPersonne();
refreshMatiere();

document.querySelector("#btn-on-un").addEventListener('click', () => {
    if(document.querySelector("#cacher-on-off-eleve").className == "cacher"){
        document.querySelector("#cacher-on-off-eleve").className = "pasCacher";
        document.querySelector("#btn-on-un").className = "btn btn-light";
        document.querySelector("#btn-on-un").textContent = "ON";
    } else {
        document.querySelector("#cacher-on-off-eleve").className = "cacher";
        document.querySelector("#btn-on-un").className = "btn btn-dark";
        document.querySelector("#btn-on-un").textContent = "OFF";
    }   
})

document.querySelector("#btn-on-deux").addEventListener('click', () => {
    if(document.querySelector("#cacher-on-off-matiere").className == "cacher"){
        document.querySelector("#cacher-on-off-matiere").className = "pasCacher";
        document.querySelector("#btn-on-deux").className = "btn btn-light";
        document.querySelector("#btn-on-deux").textContent = "ON";
    } else {
        document.querySelector("#cacher-on-off-matiere").className = "cacher";
        document.querySelector("#btn-on-deux").className = "btn btn-dark";
        document.querySelector("#btn-on-deux").textContent = "OFF";
    }   
})

document.querySelector("#btn-on-trois").addEventListener('click', () => {
    if(document.querySelector("#cacher-on-off-note").className == "cacher"){
        document.querySelector("#cacher-on-off-note").className = "pasCacher";
        document.querySelector("#btn-on-trois").className = "btn btn-light";
        document.querySelector("#btn-on-trois").textContent = "ON";
    } else {
        document.querySelector("#cacher-on-off-note").className = "cacher";
        document.querySelector("#btn-on-trois").className = "btn btn-dark";
        document.querySelector("#btn-on-trois").textContent = "OFF";
    }   
})

btnAjoutEleve.addEventListener('click', () => {
    ajoutEleve.nom = document.querySelector('#nom-eleve').value;
    ajoutEleve.prenom = document.querySelector('#prenom-eleve').value;
    for (const m of mesMatieres) {
        ajoutEleve.matiere[m] = [];
    }
    monObjet.push(ajoutEleve);
    refreshPersonne();
})

btnAjoutMatiere.addEventListener('click', () => {
    let ajoutNewMatiere = document.querySelector('#nom-matiere').value;
    mesMatieres.push(ajoutNewMatiere);
    for (let i = 0; i<monObjet.length; i++) {
        monObjet[i].matiere[ajoutNewMatiere] = [];
    }
    refreshMatiere();
})

selectPersonne.addEventListener("change", () => {
    let eleveId = selectPersonne.value;
    let matiereId = selectMatiere.value;
    let ligne = ``;
    if(eleveId != 0 && matiereId == 0){
        for (let key in monObjet[eleveId-1].matiere) {
            for(l of monObjet[eleveId-1].matiere[key]){
                ligne += `<tr>
                <td>${monObjet[eleveId-1].nom}</td>
                <td>${monObjet[eleveId-1].prenom}</td>
                <td>${key}</td>
                <td>${l}</td>
                </tr>`
            }
        }
        document.querySelector('tbody').innerHTML = ligne;
    } else if(eleveId == 0 && matiereId != 0){
        
    } else if(eleveId != 0 && matiereId != 0){
        
    } else {
        for(let m of monObjet){
            for (let key in m.matiere) {
                for(l of m.matiere[key]){
                    ligne += `<tr>
            <td>${m.nom}</td>
            <th>${m.prenom}</td>
            <td>${key}</td>
            <td>${l}</td>
            </tr>`
                }
            }
        }
    }  document.querySelector('tbody').innerHTML = ligne;
});