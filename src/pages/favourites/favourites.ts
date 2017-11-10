import { AddusersblindPage } from './../addusersblind/addusersblind';
import { Component,Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private speechRecognition: SpeechRecognition,private tts: TextToSpeech,private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  favourite:string="";
  
  speak()
  {
    this.tts.speak('This is favourites page Select your favourite user Or slide right to add a new user')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  getusername()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.favourite = matches[0];
       this.favourite = this.favourite;
      
      },
      (onerror) => console.log('error:', onerror)
    )
  }

  enterAUser()
  {
    this.navCtrl.push(AddusersblindPage)
  }
}
