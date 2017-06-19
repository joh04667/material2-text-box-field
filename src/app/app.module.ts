import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdTextFieldDirective } from './textfieldbox/md-text-field.directive';
import { TextBoxTestComponent } from './text-box-test/text-box-test.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MdTextFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdInputModule
  ],
  providers: [NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
