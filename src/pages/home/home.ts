import { FavouritesPage } from './../favourites/favourites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import {Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  el: HTMLElement;
  pressGesture: Gesture;



  salary:number = 50000;
  public static uname:string[];
  public static i:number=0;
  username_:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private speechRecognition: SpeechRecognition,private tts: TextToSpeech,el: ElementRef) {
  this.el = el.nativeElement;
  }

  ngOnInit()
  {
    
    this.speechRecognition.hasPermission()
    .then((hasPermission:boolean)=>
    {
      if(!hasPermission)
      {
        this.speechRecognition.requestPermission()
        .then(
          () => console.log('Granted'),
          () => console.log('Denied')
        )
      }

      
    })

  }

  start()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.username_ = matches[0];
       this.username_ = this.username_;
      },
      (onerror) => console.log('error:', onerror)
    )
    /*
    UserinsertPage.uname[UserinsertPage.i] = "Lakith";
    UserinsertPage.i++;
    UserinsertPage.uname[UserinsertPage.i] = this.username_;
   */
  }

  myfunc()
  {
    this.tts.speak('home page slide right to main menu')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  myfunc2()
  {
    this.tts.speak('Favourites page double tap to enter it or slide right to main menu')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  myFunction()
  {
    this.tts.stop();
    this.navCtrl.push(FavouritesPage);
  }

  

  myfunc3()
  {
    this.tts.speak('slide right to transfer money to your favourite account')
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  myfunc4()
  {
    this.tts.speak('Source account . Current balance '+this.salary)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }
}
