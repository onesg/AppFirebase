
/* IMPORT PARA REALIZAR A CONEXÃO COM FIREBASE */
import { initializeApp } from "firebase/app";

/* IMPORT PARA REALIZAR A AUTENTICAÇÃO */
import { getAuth } from 'firebase/auth';

/* CONFIGURAÇÃO DE CONEXÃO DO FIREBASE */
const firebaseConfig = {
  apiKey: "AIzaSyC0h_sJTXawIFfjrCJMSGpnualZ1bxi-Z0",
  authDomain: "fir-app-f3866.firebaseapp.com",
  projectId: "fir-app-f3866",
  storageBucket: "fir-app-f3866.appspot.com",
  messagingSenderId: "1026673408467",
  appId: "1:1026673408467:web:8baaacc4ccb108108a5726"
};

/* INICIANDO A CONFIGURAÇÃO DO FIREBASE */
const app = initializeApp(firebaseConfig);

/* EXPORTANDO AUTH COM O APLICATIVO */
export const auth = getAuth(app);