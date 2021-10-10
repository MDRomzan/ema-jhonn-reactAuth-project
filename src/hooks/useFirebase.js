import react, {
    useState,useEffect
} from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";



initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
           
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            }
        });
        return unsubscribe;
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }


}
export default useFirebase;