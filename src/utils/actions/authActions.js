import { getFirebaseConfig } from "../firebaseHelper";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, getDatabase, ref, set } from 'firebase/database';

const app = getFirebaseConfig();
const auth = getAuth(app);

export const signUp = async ({ firstName, lastName, email, password }) => {
    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        
        const { uid } = result.user;

        const userData = await createUser({ firstName, lastName, email, uid });

        console.log(userData);

    } catch (error) {
        const errorCode = error.code;
        let message = "Something went wrong";
        if (errorCode === "auth/email-already-in-use") {
            message = "This email is already in use";
        }
        throw new Error(message);
    }
};

const createUser = async ({ firstName, lastName, email, uid }) => {
    console.log(uid)
    const firstLast = `${firstName} ${lastName}`.toLowerCase();
    const userData = {
        firstName, 
        lastName,
        firstLast, 
        email,
        uid,
        signUpDate: new Date().toISOString()
    }

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${uid}`)
    await set(childRef, userData);
    return userData;
}

export const signIn = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};
