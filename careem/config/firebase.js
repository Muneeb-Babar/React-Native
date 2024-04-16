
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, query, orderBy, onSnapshot, doc } from "firebase/firestore";


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

async function getRides(callback) {
    const ridesRef = collection(db, "ride")
    const q = query(ridesRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
        const rides = []
        querySnapshot.forEach((doc) => {
            rides.push({ _id: doc.id, ...doc.data() })
        });
        callback(rides)
    });}

    async function updateStatus(docId, status) {
        const rideRef = doc(db, 'ride', docId);
        await setDoc(rideRef, { status }, { merge: true });
    }

    export{
        getRides,
        updateStatus
    }


