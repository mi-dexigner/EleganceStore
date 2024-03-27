import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  toggleAccordion(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const expanded = target.getAttribute('aria-expanded');
    target.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
  }

}
