// firebase.js
import firebase from 'firebase/app';
import 'firebase/performance';

const firebaseConfig = {
    apiKey: "AIzaSyAesKleDUU2ypSz30UYc-w_CCP7W0XoiTM",
    authDomain: "reactnativetestapp-81dd7.firebaseapp.com",
    projectId: "reactnativetestapp-81dd7",
    storageBucket: "reactnativetestapp-81dd7.appspot.com",
    messagingSenderId: "559059494259",
    appId: "1:559059494259:web:c76ddd89b12eb564cb9106",
    measurementId: "G-354WSTNM5P"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const perf = firebase.performance();

export { firebase, perf };
