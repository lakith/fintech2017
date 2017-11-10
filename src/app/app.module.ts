import { LoginuserPage } from './../pages/loginuser/loginuser';



import { LoginPageModule } from './../../../../fingerprint/src/pages/login/login.module';
import { FavouritesPage } from './../pages/favourites/favourites';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Vibration } from '@ionic-native/vibration';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    LoginuserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritesPage,
    LoginuserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    Vibration
  ]
})
export class AppModule {}
