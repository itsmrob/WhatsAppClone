import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export const getFirebaseConfig = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAk_Yliu5n7qAwZ4aIrbuRiR-6DZ0p8Ulc",
        authDomain: "whatsapp-ba942.firebaseapp.com",
        projectId: "whatsapp-ba942",
        storageBucket: "whatsapp-ba942.appspot.com",
        messagingSenderId: "423035269812",
        appId: "1:423035269812:web:b99d467e78c404c48f5de1",
        measurementId: "G-L3NRNYKYD1",
    };

    // const analytics = getAnalytics(app);

    return initializeApp(firebaseConfig);
};
