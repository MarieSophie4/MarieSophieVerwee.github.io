import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /** Emit the changed language to the app component file */
  @Output() languageEmitter : EventEmitter<string> = new EventEmitter<string>();

    /**
   * Function triggered by language change in html dropdown
   * @param lang chosen language
   */
    languageChange(lang :  string){
      this.languageEmitter.emit(lang);
    }
}
