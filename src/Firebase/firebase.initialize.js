import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication 
Initial setup 
---------------
1.firebase :create project 
2.create web app 
3.get configuration
4.initialize firebase 
5.Enable auth Method

steps 2: COMPONETS USE 
1.Cerate Login Componts
2.Create Register Components 
3.Create Route for Login Register
steps3:
1.set up sign in method 
2.setup sign out inn method
3.state user
4.special observer

------------------------
steps 4:useAUTH USE 
1.create a auth context 
2.Create context Provider
3.set provider value
4.use Auth Provider 
5.Create useAuth Hook
-----------------
setps 5:
1.Create private Route
2.set private Route

setps:6 
1.React hook use and from control very excellent power full
2.Redirt location theke amara shipping visit and chage cart.



*/