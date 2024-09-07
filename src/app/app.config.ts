import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-92158","appId":"1:29612023969:web:02aec482923bbb25aa50e0","storageBucket":"ringoffire-92158.appspot.com","apiKey":"AIzaSyDYvyjnF2wy-R5EiRlhUg7c9uEQuQmO7QY","authDomain":"ringoffire-92158.firebaseapp.com","messagingSenderId":"29612023969"})), provideFirestore(() => getFirestore())]
};
