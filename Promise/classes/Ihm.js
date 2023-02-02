import Todo from "./Todo.js";

export default class Ihm{
    constructor(formulaireRecherche,formulaireAjouter,tableauHtml){
        this.tableauTodo = [];
        this.formulaireRecherche = formulaireRecherche;
        this.formulaireAjouter = formulaireAjouter;
        this.tableauHtml = tableauHtml;
    }

    afficherListe(){
        for(let todo of this.tableauTodo){
            console.log(todo);
        }
    }

    creerTodo() {
        let newTodo = new Todo(this.tableauTodo.length,this.formulaireAjouter.querySelector("#input-titre").value,this.formulaireAjouter.querySelector("#input-description").value,"Pas fait");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (newTodo) {
                    resolve(newTodo);
                } else {
                    reject(new Error("Il y a eu une erreur dans la création du todo!"))
                }
            }, 1000)
        })
    }

    afficherTodo(tableau){
        this.tableauHtml = "";
        for(let t of tableau){
            this.tableauHtml += `<tr><td>${t.id}</td><td>${t.titre}</td><td>${t.description}</td><td>${t.statut}</td><td><button type="button" class="btn btn-primary" class="supprimer">Supprimer</button><button type="button" class="btn btn-secondary" class="modifier">Modifier</button></td></tr>`
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.tableauHtml != "") {
                    resolve(this.tableauHtml);
                } else {
                    reject(new Error("Le tableau est vide"))
                }
            }, 1000)
        })
    }

    ajoutTodo(tab){
        this.formulaireAjouter.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                let ajout = await this.creerTodo();
                this.tableauTodo.push(ajout);
                let txt = await this.afficherTodo(this.tableauTodo);
                tab.innerHTML = txt;

            } catch (error) {
                console.error(error);
            }
        
        })
    }

    recherche(chaineCaractere){
        let tabBis = [];
        for(let todoBis of this.tableauTodo){
            if(todoBis.titre.includes(chaineCaractere)){
                tabBis.push(todoBis);
            }
        }
        console.log(tabBis);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (tabBis.length !=0) {
                    resolve(tabBis);
                } else {
                    reject(new Error("Le tableau est vide"))
                }
            }, 1000)
        })
    }


    rechercheTodo(tab){
        this.formulaireRecherche.addEventListener('submit', async (e) => {
            e.preventDefault();
            try{
                let todoRecherche = await this.recherche(this.formulaireRecherche.querySelector("#recherche-value").value);
                let txt = await this.afficherTodo(todoRecherche);
                tab.innerHTML = txt;
            } catch (error){
                console.log(error);
            }
        })
    }

}