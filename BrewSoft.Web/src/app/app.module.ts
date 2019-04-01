import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeCashComponent } from './cash/home-cash/home-cash.component';
import { HomeStockComponent } from './stock/home-stock/home-stock.component';
import { HomeBeerComponent } from './beer/home-beer/home-beer.component';
import { HomeSettingComponent } from './setting/home-setting/home-setting.component';
import { BrasseursSettingComponent } from './setting/brasseurs-setting/brasseurs-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccueilComponent,
    HomeCashComponent,
    HomeStockComponent,
    HomeBeerComponent,
    HomeCashComponent,
    HomeSettingComponent,
    BrasseursSettingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
