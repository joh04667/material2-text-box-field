import { Directive, ElementRef, QueryList, Query, ViewChild, ViewContainerRef } from '@angular/core';
import { MdInputContainer } from '@angular/material';

@Directive({
  selector: '[mdTextField]',
  host: { style: 'background-color: rgba(0,0,0,0.06); border-radius: 4px'}
})
export class MdTextFieldDirective {

  underline: any;
  ripple: any;
  table: any;

      @ViewChild(MdInputContainer) container;

  constructor(private el: ElementRef, public view: ViewContainerRef) {
  }
  getElements(selector: string) {
    return this.el.nativeElement.querySelector(selector)
  }

  ngAfterViewInit() {
    this.underline = this.getElements('.mat-input-underline');
    this.ripple = this.getElements('.mat-input-ripple');
    this.table = this.getElements('.mat-input-table');
    this.table.style.padding = '0 16px';
    this.table.style.boxSizing = 'border-box';
    this.getElements('.mat-input-wrapper').style.margin = '20px 0 0';
    this.underline.style.visibility = 'hidden';
    this.ripple.style.borderBottomRightRadius = '16px 4px';
    this.ripple.style.borderBottomLeftRadius = '16px 4px';
    console.log(this)
    console.log((<any>this.view)._data.componentView.component.underlineRef, this.view)

  }

  ngAfterContentInit() {
  }


}
