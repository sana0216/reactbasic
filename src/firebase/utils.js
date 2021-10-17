
import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sign with google

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
 const signInWithGoogle = ()=>{auth.signInWithPopup(googleProvider)}
 export const handleUserProfile = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const {uid} = userAuth;
    const userRef = firestore.doc(`users/${uid}`)

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const{displayName, email} = userAuth;
        const timestamp = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdDate:timestamp,
                ...additionalData
            });
        }catch(err){
            console.log(err);
        }
    }
    return userRef;
}

//signin with facebook
const FacebookProvider= new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({
    'display': 'popup'
});
FacebookProvider.addScope('user_friends');

 export default signInWithGoogle ;



 