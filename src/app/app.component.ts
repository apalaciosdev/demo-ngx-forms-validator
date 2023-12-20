import { Component } from '@angular/core';
import { TranslateService } from 'ngx-forms-validator';
import { translationES } from 'src/assets/i18n/es_ES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setTranslationLanguaje('es_ES');
    this.translateService.setCustomTranslations(translationES);
  }
}
