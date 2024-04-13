
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
    authDomain: "test-project-67367.firebaseapp.com",
    projectId: "test-project-67367",
    storageBucket: "test-project-67367.appspot.com",
    messagingSenderId: "986217264801",
    appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function requestedRide(rideRequest){
        await addDoc(collection(db, "ride"), {
        ...rideRequest,
        timestamp:Date.now()
    });
    alert("Ride requested successfully! Let's wait for the driver")
}
export{
    requestedRide
}