import { Contact } from "./classes/Contact.js";
let tableauContact = [];
let contact1 = new Contact('Clement', 'Lalaux', new Date(1998, 10, 5), "lalauxclement@gmail.com", "0761147926");
let contact2 = new Contact('Jean', 'Valjean', new Date(1998, 10, 5), "lalauxclement@gmail.com", "0761147926");
let contact3 = new Contact('John', 'Doe', new Date(1998, 10, 5), "lalauxclement@gmail.com", "0761147926");
let contact4 = new Contact('Test', 'Test', new Date(1998, 10, 5), "lalauxclement@gmail.com", "0761147926");
let contact5 = new Contact('Clement', 'Lalaux', new Date(1998, 10, 5), "lalauxclement@gmail.com", "0761147926");
let dom = document.getElementById('liste');
let info = document.getElementById('info');
tableauContact.push(contact1);
tableauContact.push(contact2);
tableauContact.push(contact3);
tableauContact.push(contact4);
tableauContact.push(contact5);
const afficheListeContact = (dom) => {
    let texteHtml = "";
    tableauContact.forEach(contact => {
        texteHtml += `<p class="liste-contact"id="${contact.id}">${contact.nom} ${contact.prenom}</p>`;
    });
    dom.innerHTML = texteHtml;
    ajoutEvent();
};
const ajoutEvent = () => {
    let listeContact = document.querySelectorAll('.liste-contact');
    listeContact.forEach(contact => {
        contact.addEventListener('click', () => {
            afficherInfo(tableauContact[Number(contact.id) - 1]);
            colorise(contact, listeContact);
        });
    });
};
const afficherInfo = (cont) => {
    let infoContactHtml = `<p>Nom : ${cont.nom}</p>
    <p>Prenom : ${cont.prenom}</p>
    <p>Date de naissance : ${cont.dateDeNaissance}</p>
    <p>Email : ${cont.email}</p>
    <p>Numéro de téléphone : ${cont.numeroTelephone}</p>
    `;
    info.innerHTML = infoContactHtml;
};
const colorise = (contact, liste) => {
    liste.forEach(element => {
        if (element.classList.contains("color")) {
            element.classList.remove("color");
        }
    });
    contact.classList.add("color");
};
afficheListeContact(dom);
