import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {
  txt:string;
  constructor() { }
  @Output()  inputContent=new EventEmitter();
  content(e){
    if(e.keyCode==13)
    {
      this.inputContent.emit(this.txt);
      console.log("childinput");
      console.log(this.txt);
      this.txt="";
    }
  }
  ngOnInit() {
  }

}
