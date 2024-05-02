import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  //  config object
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };