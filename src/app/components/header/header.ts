import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  formRquest = new FormGroup({
    username: new FormControl('',Validators.required)
  });

  emitEvent(){
    this.eventEmitter.emit(this.formRquest.get('username')?.value || '');
  }
}
