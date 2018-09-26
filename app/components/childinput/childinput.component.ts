import { Component, OnInit ,EventEmitter,Output } from '@angular/core';
import { Input} from '@angular/core'
@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent implements OnInit {
  @Input() arr:string[];@Input() arr1:string[];
  @Output() delIndex=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  delete(n){
    this.changeIndex.emit(n);
  }
  constructor() { }

  ngOnInit() {
  }

}
