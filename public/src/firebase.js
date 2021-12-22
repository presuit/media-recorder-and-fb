// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import {
  getStorage,
  ref,
  uploadBytes,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBnq7mPuqFVtREn740TIww9tXxP8pC8h1M',
  authDomain: 'spherical-berm-309110.firebaseapp.com',
  projectId: 'spherical-berm-309110',
  storageBucket: 'spherical-berm-309110.appspot.com',
  messagingSenderId: '1027641437062',
  appId: '1:1027641437062:web:a50125c051f5a5fee99a07',
  measurementId: 'G-VR9PCHD3NJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();

const date = new Date();

const audioRef = ref(storage, `files/example${date.toString()}.mp3`);

const addToStorage = async (blob) => {
  await uploadBytes(audioRef, blob);
  alert('조계지니에게 음성 전달 완료!');
};

export { addToStorage };
