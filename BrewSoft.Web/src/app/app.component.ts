import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BrewSoft';

  isBeerSelect: boolean;
  isCashSelect: boolean;
  isStockSelect: boolean;
  isSettingSelect: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private matIconRegistry: MatIconRegistry, private breakpointObserver: BreakpointObserver,
              private domSanitizer: DomSanitizer, private location: Location) {
    this.matIconRegistry.addSvgIcon('beerIcon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/beerIcon.svg'));
    this.matIconRegistry.addSvgIcon('cashIcon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/cashIcon.svg'));
    this.matIconRegistry.addSvgIcon('stockIcon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/stockIcon.svg'));
    this.matIconRegistry.addSvgIcon('settingIcon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/settingIcon.svg'));

    this.isBeerSelect = this.location.path().includes('/Beer');
    this.isStockSelect = this.location.path().includes('/Stock');
    this.isCashSelect = this.location.path().includes('/Cash');
    this.isSettingSelect = this.location.path().includes('/Setting');
  }

  public ClickSection(name) {
    this.isBeerSelect = false;
    this.isCashSelect = false;
    this.isStockSelect = false;
    this.isSettingSelect = false;

    switch (name) {
      case 'beer':
        this.isBeerSelect = true;
        break;
      case 'cash':
        this.isCashSelect = true;
        break;
      case 'stock':
        this.isStockSelect = true;
        break;
      case 'setting':
        this.isSettingSelect = true;
        break;
    }
  }
}
