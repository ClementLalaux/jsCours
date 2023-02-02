class Contact {
    constructor(_nom, _prenom, _dateDeNaissance, _email, _numeroTelephone) {
        this._nom = _nom;
        this._prenom = _prenom;
        this._dateDeNaissance = _dateDeNaissance;
        this._email = _email;
        this._numeroTelephone = _numeroTelephone;
        this._id = ++Contact._count;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nom() {
        return this._nom;
    }
    set nom(nom) {
        this._nom = nom;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(prenom) {
        this._prenom = prenom;
    }
    get dateDeNaissance() {
        return this._dateDeNaissance;
    }
    set dateDeNaissance(dateDeNaissance) {
        this._dateDeNaissance = dateDeNaissance;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get numeroTelephone() {
        return this._numeroTelephone;
    }
    set numeroTelephone(numeroTelephone) {
        this._numeroTelephone = numeroTelephone;
    }
    static get count() {
        return Contact._count;
    }
}
Contact._count = 0;
export { Contact };
