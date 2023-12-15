class Usuario {
    constructor(rol_id, us_name, us_surname, us_email, us_password, us_state) {
        this._rol_id = rol_id;
        this._us_name = us_name;
        this._us_surname = us_surname;
        this._us_email = us_email;
        this._us_password = us_password;
        this._us_state = us_state;
    }


    // Getter y Setter para rol_id
    get rol_id() {
        return this._rol_id;
    }
    set rol_id(newRolId) {
        this._rol_id = newRolId;
    }

    // Getter y Setter para us_name
    get us_name() {
        return this._us_name;
    }
    set us_name(newUsName) {
        this._us_name = newUsName;
    }

    // Getter y Setter para us_surname
    get us_surname() {
        return this._us_surname;
    }
    set us_surname(newUsSurname) {
        this._us_surname = newUsSurname;
    }

    // Getter y Setter para us_email
    get us_email() {
        return this._us_email;
    }
    set us_email(newUsEmail) {
        this._us_email = newUsEmail;
    }

    // Getter y Setter para us_password
    get us_password() {
        return this._us_password;
    }
    set us_password(newUsPassword) {
        this._us_password = newUsPassword;
    }

    // Getter y Setter para us_state
    get us_state() {
        return this._us_state;
    }
    set us_state(newUsState) {
        this._us_state = newUsState;
    }
}
module.exports = Usuario;