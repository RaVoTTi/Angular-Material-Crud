import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',

})
export class InputsComponent {

  @Input() title:string = '';
  @Input() type:string = 'text';
  @Output() value: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() { }


  ngOnInit(){

  }



}
