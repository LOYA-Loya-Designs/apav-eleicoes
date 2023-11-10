import { app } from "../db/firebase"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const auth = getAuth();

export const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

export const logOut = () => {
    signOut(auth)
}