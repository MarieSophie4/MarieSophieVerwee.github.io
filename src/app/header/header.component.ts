import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input, OnInit, OnChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../@shared/language.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  /** Emit the changed language to the app component file */
  @Output() languageEmitter: EventEmitter<string> = new EventEmitter<string>();
  currentLanguage: string = '';
  public languages = Object.values(Languages).filter(value => typeof value === 'string');;

  isMenuVisible = false;
  public showHideName:boolean = false;

  constructor(private translate: TranslateService, private router: Router) { }
  /**
 * Function triggered by language change in html dropdown
 * @param lang chosen language
 */
  onLanguageChange(lang: any) {
    const selectedLanguage: string = (lang.target as HTMLSelectElement).value;
    console.log(selectedLanguage)
    this.languageEmitter.emit(selectedLanguage.toLowerCase());

    this.translate.use(selectedLanguage.toLowerCase())
  }

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang.toUpperCase()
    console.log(this.translate.currentLang)
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onRouterChange(path : string){
    this.router.navigateByUrl(path)

  }

}
