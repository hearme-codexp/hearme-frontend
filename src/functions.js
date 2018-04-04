import { notification } from 'antd';

let isAuthenticated = true;

export function fakeAuth() {
    return isAuthenticated;
}

export function authenticate(cb) {
    isAuthenticated = true
    setTimeout(cb, 100)
}

export function signout(cb) {
    isAuthenticated = false
    setTimeout(cb, 100)
}

export function openNotification(props) {
    notification.open({message: props.message, description: props.description});
};

// export function login () {    return authenticate(() => true) }   login = ()
// => {     authenticate(() => {       this.setState(() => ({
// redirectToReferrer: true       }))     })