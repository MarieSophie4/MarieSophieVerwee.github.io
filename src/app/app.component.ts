import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements AfterViewInit {
  title = 'Marie-Sophie verwee';
 /** Emit the changed language to the app component file */
  @Output() languageEmitter : EventEmitter<string> = new EventEmitter<string>();
  
  constructor(    
    private readonly ts: TranslateService,
    ) {}

  ngAfterViewInit() {
   this.ts.setDefaultLang('en')
  }

  /**
   * Function triggered by language change in html dropdown
   * @param lang chosen language
   */
  languageChange(lang :  string){ 
    this.languageEmitter.emit(lang);  
    
  }
}
   