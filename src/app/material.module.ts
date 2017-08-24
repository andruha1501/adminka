import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdRadioModule, MdListModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdRadioModule,MdListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdRadioModule, MdListModule],
})
export class MaterialModule { }