import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeCashComponent } from './cash/home-cash/home-cash.component';
import { HomeStockComponent } from './stock/home-stock/home-stock.component';
import { HomeBeerComponent } from './beer/home-beer/home-beer.component';
import { HomeSettingComponent } from './setting/home-setting/home-setting.component';
import { BrasseursSettingComponent } from './setting/brasseurs-setting/brasseurs-setting.component';

const routes: Routes = [
  {
    path: 'Home',
    component: AccueilComponent,
    data: { title: 'Accueil' }
  },
  {
    path: 'Stock',
    component: HomeStockComponent,
    data: { title: 'Stocks' }
  },
  {
    path: 'Cash',
    component: HomeCashComponent,
    data: { title: 'Cashs' }
  },
  {
    path: 'Beer',
    component: HomeBeerComponent,
    data: { title: 'Beer' }
  },
  {
    path: 'Setting',
    component: HomeSettingComponent,
    data: { title: 'Settings' }
  },
  {
    path: 'Setting/Brasseur',
    component: BrasseursSettingComponent,
    data: { title: 'Brasseurs' }
  },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
