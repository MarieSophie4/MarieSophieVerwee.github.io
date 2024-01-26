import { Component, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TranslateModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router,) {}

  changePage() {
    // Navigate to the desired route when the div is clicked
    this.router.navigateByUrl('/about')
  }
}
