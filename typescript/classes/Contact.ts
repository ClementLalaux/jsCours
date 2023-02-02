class Contact {
    private static _count: number = 0;
    private _id : number;

    constructor(private _nom :string,
        private _prenom : string,
        private _dateDeNaissance : Date,
        private _email : string,
        private _numeroTelephone : string
    ){
        this._id = ++Contact._count
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nom: string) {
        this._nom = nom;
    }

    public get prenom(): string {
        return this._prenom;
    }

    public set prenom(prenom: string) {
        this._prenom = prenom;
    }

    public get dateDeNaissance(): Date {
        return this._dateDeNaissance;
    }

    public set dateDeNaissance(dateDeNaissance: Date) {
        this._dateDeNaissance = dateDeNaissance;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get numeroTelephone(): string {
        return this._numeroTelephone;
    }

    public set numeroTelephone(numeroTelephone: string) {
        this._numeroTelephone = numeroTelephone;
    }

    static get count() {
        return Contact._count
    }


}

export {Contact};