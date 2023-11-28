import { app } from "../db/firebase"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const auth = getAuth();

export const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            return user
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            throw error
        });
}

export const logOut = async () => {
    await signOut(auth)
}