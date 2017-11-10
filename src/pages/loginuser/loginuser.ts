import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
/**
 * Generated class for the LoginuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginuser',
  templateUrl: 'loginuser.html',
})
export class LoginuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private speechRecognition: SpeechRecognition,private tts: TextToSpeech,private vibration: Vibration) {
    
    }
  
  username:string="";
  password:string="";

  getusername()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.username = matches[0];
       this.username = this.username;
       this.getpassword();
      },
      (onerror) => console.log('error:', onerror)
    )
  }

  getpassword()
  {
    this.speechRecognition.startListening()
    .subscribe(
      (matches: Array<string>) => 
      {
       console.log(matches);
       this.password = matches[0];
       this.password = this.password;
       setTimeout(this.time(),1000)

      },
      (onerror) => console.log('error:', onerror)
    )
  }
  
  getpasswordfinger(){}
  
  time()
  {
    this.vibration.vibrate(1000)
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginuserPage');
  }

}
