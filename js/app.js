
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBE7JXdNv-C777licyYNJxMXXfRLLExxtU",
    authDomain: "hopeforzeropolio.firebaseapp.com",
    databaseURL: "https://hopeforzeropolio-default-rtdb.firebaseio.com",
    projectId: "hopeforzeropolio",
    storageBucket: "hopeforzeropolio.appspot.com",
    messagingSenderId: "269093879816",
    appId: "1:269093879816:web:b001353772d6c46466d1bd",
    measurementId: "G-T3MCBBLXBM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Get a reference to the database service
  var database = app.database();


/*

const db = getDatabase();
const starCountRef = ref(db, '001/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  //updateStarCount(postElement, data);
});
*/
