import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqNzabJ2V04augkZQ_j2SBbzTA5RnfnTM",
    authDomain: "fir-sw-4178f.firebaseapp.com",
    databaseURL:
        "https://fir-sw-4178f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-sw-4178f",
    storageBucket: "fir-sw-4178f.appspot.com",
    messagingSenderId: "436997113642",
    appId: "1:436997113642:web:754722432be9145d36c053",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getPeople = async () => {
    const querySnapshot = await getDocs(collection(db, "people"));

    const people = [];

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        people.push(doc.data());
    });
    return people;
};

export const addPerson = async (name,height,mass) => {
    try {
        const docRef = await addDoc(collection(db, "people"), {
            name,
            height,
            mass
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
