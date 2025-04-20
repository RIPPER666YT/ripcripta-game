// config.js
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || window.firebaseConfig?.apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || window.firebaseConfig?.authDomain,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL || window.firebaseConfig?.databaseURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || window.firebaseConfig?.projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || window.firebaseConfig?.storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || window.firebaseConfig?.messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_APP_ID || window.firebaseConfig?.appId
};

// Для использования в HTML файле
window.firebaseConfig = firebaseConfig;
