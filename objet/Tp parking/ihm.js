import Vehicule from "./classe/Vehicule.js";

export default class Ihm {
    constructor(boutonPayer,boutonAjouter,texte,msg){
        this.tableauVehicule = [];
        this.tableauVehiculeTicket = [];
        this.boutonPayer = boutonPayer;
        this.boutonAjouter = boutonAjouter;
        this.texte = texte;
        this.msg = msg;
    }

    ajoutVehicule(){
        this.boutonAjouter.addEventListener('click',()=>{
            let v = new Vehicule('renault','megane',150000,1998,document.getElementById('immatriculation').value);
            this.tableauVehicule.push(v);
        })  
    }

    ajoutVehiculeTicket(immatriculation){
        this.boutonPayer.addEventListener('click',() => {
            let t = false;
            for(let i=0;i<this.tableauVehicule.length;i++){
                if(this.tableauVehicule[i].immatriculation == immatriculation.value){
                    this.tableauVehiculeTicket.push([this.tableauVehicule[i],new Date()]);
                    this.paiement(this.tableauVehiculeTicket[0][1]);
                    t=true;
                    return;
                }
            }
            if(t==false){
                console.log('Pas de véhicule avec cette immatriculation');
                this.pasVehicule();
            }
        })
    }


    comparerDate(date){
        console.log(Date.now() - Date.parse(date))
        if(Date.now() - Date.parse(date) <= 300000){
            return '0.80 €'
        } else if(Date.now() - Date.parse(date) <= 1800000){
            return '1.30 €'
        } else if(Date.now() - Date.parse(date) <= 2700000){
            return '1.70 €'
        } else {
            return '6 €'
        }
    }

    pasVehicule(){
        this.msg.innerHTML = `<p class="text-center">Le véhicule n'est pas dans la liste</p>`;
    }

    paiement(date){
        let cout = this.comparerDate(date);
        this.msg.innerHTML = `<p class="text-center">Le véhicule doit ${cout}</p>` 
    }
}