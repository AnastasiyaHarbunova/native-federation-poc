import { loadRemoteModule } from "@angular-architects/native-federation";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);

  @Input() config = {
    remoteName: '',
    exposedModule: '',
    elementName: '',
  };

  async ngOnInit() {
    await loadRemoteModule('angular17-app', './web-components');
    const root = document.createElement('angular17-app');
    this.elm.nativeElement.appendChild(root);
  }
}
