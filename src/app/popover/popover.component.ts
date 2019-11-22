import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Instruction } from '../instruction';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  page;
  instr : Instruction;
  givenSug : string

  constructor(private popConp : PopoverController, public navParams: NavParams) {
    this.instr = this.navParams.get('instr')
   }

   addSug() {
     this.instr.addSuggestion(this.givenSug);
   }

  ngOnInit() {}

}
