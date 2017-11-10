import { dataArray } from './../data';
import { Component,Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the AddusersblindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addusersblind',
  templateUrl: 'addusersblind.html',
})
export class AddusersblindPage {
  
  newuser:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private speechRecognition: SpeechRecognition,private tts: TextToSpeech,private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddusersblindPage');
  }

  enterAUser()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.newuser = matches[0];
       this.newuser = this.newuser;
       dataArray.names[this.newuser];
       dataArray.count++;
      },
      (onerror) => console.log('error:', onerror)
    )
  }


}
