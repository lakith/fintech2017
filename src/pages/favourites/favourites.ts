import { dataArray } from './../data';
import { AddusersblindPage } from './../addusersblind/addusersblind';
import { Component,Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { HomePage } from '../home/home';
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
  favourite2:string="";
  
  speak()
  {
    this.tts.speak('This is favourites page double tap Select your favourite user Or slide right to add a new user')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  SelectUser()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.favourite = matches[0];
       dataArray.selected = this.favourite;
       this.navCtrl.push(HomePage);
      },
      (onerror) => console.log('error:', onerror)
    )
  }
  speak2()
  {
    this.tts.speak('double tap to Add a new user')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  enterAUser()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.favourite2 = matches[0];
       dataArray.names[this.favourite2];
       dataArray.selected = this.favourite2;
       this.navCtrl.push(HomePage);
      },
      (onerror) => console.log('error:', onerror)
    )
  }
}
