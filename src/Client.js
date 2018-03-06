export default class Client {
    constructor() {
        this._name = '';
        this._email = '';
        this._password = '';
        this._passwordConfirmation = '';
        this._birth = '';
        this._deficiency = '';
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get passwordConfirmation() {
        return this._passwordConfirmation;
    }

    set passwordConfirmation(passwordConfirmation) {
        this._passwordConfirmation = passwordConfirmation;
    }

    get birth() {
        return this._birth;
    }

    set birth(birth) {
        this._birth = birth;
    }

    get deficiency() {
        return this._deficiency;
    }

    set deficiency(deficiency) {
        this._deficiency = deficiency;
    }
}