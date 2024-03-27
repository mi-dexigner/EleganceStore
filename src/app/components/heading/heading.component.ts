import { NgIf } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgIf],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
  encapsulation: ViewEncapsulation.None

})
export class HeadingComponent {

  @Input() title:any
  @Input() content:any

}
