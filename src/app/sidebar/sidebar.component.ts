import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCheckedRadioButt: boolean = false;
  isShowListKit:boolean=false;
  links:string[] = [
     'Typography','Buttons','Icons','Catds','Icon Boxes','Components','Hover','Feature Collouts','Lists'
  ]
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'angular-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/angular-icon.svg'));
  }
  ngOnInit() {
  }

}
