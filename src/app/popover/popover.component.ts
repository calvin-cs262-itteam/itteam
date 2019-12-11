import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Instruction } from '../instruction';

/* 
 * Popover component for suggestions
 */
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  page;
  instr : Instruction;
  givenSug : string

  /**
   * Popover controller constructor
   * @param popCont the popover controller
   * @param navParams given parameters, 
   *     including instr the instruction calling popover
   */
  constructor(private popCont : PopoverController, public navParams: NavParams) {
    this.instr = this.navParams.get('instr')
   }

   /* adds the suggestion in input to instruction
    * requirement: givenSug must not be empty
    */
   addSug() {
     if (this.givenSug != "" && this.givenSug){
      this.instr.addSuggestion(this.givenSug);
     }
   }

  ngOnInit() {}

}
