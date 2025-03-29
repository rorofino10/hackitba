import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDB4vG77z1CBjdz7xJcB4p14gBgGN5LBgo",
  authDomain: "hackitba-proyecto.firebaseapp.com",
  projectId: "hackitba-proyecto",
  storageBucket: "hackitba-proyecto.firebasestorage.app",
  messagingSenderId: "343775542733",
  appId: "1:343775542733:web:9e012843694b9365975884"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
