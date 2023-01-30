import Mammifere from "./Mammifere.js";

export default class Chien extends Mammifere {

    Aboyer(){
        if(this.heartRate){
            console.log("Aboie");
        } else {
            console.log("Aboie plus car mort");
        }
    }

    Alimentation(){
        console.log("Croquettes");
    }

    Respiration(){
        console.log("Inspiration , expiration")
    }
}