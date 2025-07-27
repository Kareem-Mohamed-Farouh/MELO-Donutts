import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/pages/home/home.component';
import { MenuComponent } from './Feature/pages/menu/menu.component';
import { ContactComponent } from './Feature/pages/contact/contact.component';
import { AboutComponent } from './Feature/pages/about/about.component';
import { DonutsComponent } from './Feature/pages/menu/components/donuts/donuts.component';
import { CheascakeComponent } from './Feature/pages/menu/components/cheascake/cheascake.component';
import { SinabonComponent } from './Feature/pages/menu/components/sinabon/sinabon.component';
import { CookiesComponent } from './Feature/pages/menu/components/cookies/cookies.component';
import { BrevagesComponent } from './Feature/pages/menu/components/brevages/brevages.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu',

    children: [
      { path: '', redirectTo: 'donuts', pathMatch: 'full' },
      { path: 'donuts', component: DonutsComponent, title: 'Donuts' },
      { path: 'cheascake', component: CheascakeComponent, title: 'Cakes' },
      { path: 'sinabon', component: SinabonComponent, title: 'Sinabon' },
      { path: 'cookies', component: CookiesComponent, title: 'Cookies' },
      { path: 'beverages', component: BrevagesComponent, title: 'Beverages' },
    ],
  },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'about', component: AboutComponent, title: 'About Story' },
];
