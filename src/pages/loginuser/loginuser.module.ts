


import { NgModule } from '@angular/core';
import { IonicPageModule,IonicPage, NavController, NavParams} from 'ionic-angular';
import { LoginuserPage } from './loginuser';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    LoginuserPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginuserPage),
  ],
})
export class LoginuserPageModule 
{
}
