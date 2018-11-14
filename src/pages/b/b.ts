import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items = ['查看全部订单'];
  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
