import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MdInputContainer } from '@angular/material';
import { NgForm, FormGroupDirective } from "@angular/forms";


@Component({
  selector: 'app-text-box-test',
  templateUrl: './text-box-test.component.html',
  styleUrls: ['./text-box-test.component.scss']
})
export class TextBoxTestComponent extends MdInputContainer {

  constructor(public el: ElementRef,
    private change: ChangeDetectorRef,
    private form: NgForm,
    private fg: FormGroupDirective
  ) {
    super(el, change, form, fg)
    
   }

  ngOnInit() {
    console.log(this)
  }

}
