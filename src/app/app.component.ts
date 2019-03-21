import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }
  OtpForm = this.fb.group({
    OtpForm1: ['',Validators.required],
    OtpForm2: ['',Validators.required],
    OtpForm3: ['',Validators.required],
    OtpForm4: ['',Validators.required], 
  });

  getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
  }
  onKeyUpEvent(index, event) {
    if(this.getCodeBoxElement(index).value.length>1){
      return this.getCodeBoxElement(index).value=this.getCodeBoxElement(index).value.charAt(0);
    }
    const eventCode = event.which || event.keyCode;
    if (this.getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
        this.getCodeBoxElement(index+ 1).focus();
      } else {
        this.getCodeBoxElement(index).blur();
        // Submit code
        console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      this.getCodeBoxElement(index - 1).focus();
    }
  }
   onFocusEvent(index) {
    for (let item = 1; item < index; item++) {
      const currentElement = this.getCodeBoxElement(item);
       if (!currentElement.value) {
          currentElement.focus();
          break;
       }
    }
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.OtpForm.value);
  }
}
