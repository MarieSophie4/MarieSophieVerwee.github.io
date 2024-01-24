import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TranslateModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
