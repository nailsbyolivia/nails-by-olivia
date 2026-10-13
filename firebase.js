const firebaseConfig = {
  apiKey: "AIzaSyDkSYWOV4MLMPlXr3SjRxSqX24BW8aqt1A",
  authDomain: "nails-by-olivia.firebaseapp.com",
  projectId: "nails-by-olivia",
  storageBucket: "nails-by-olivia.firebasestorage.app",
  messagingSenderId: "972521448276",
  appId: "1:972521448276:web:b921c542a340cb7f595ec1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();