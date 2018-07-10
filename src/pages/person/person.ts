import { SettingPage } from './../person/setting/setting';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  //去设置
  getSetting(){
    this.navCtrl.push(SettingPage);
  }

  //去我的github
  getGithub(){
    this.navCtrl.push("https://github.com/hzlshen/");
  }

}
