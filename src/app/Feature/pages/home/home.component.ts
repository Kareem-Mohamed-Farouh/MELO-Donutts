import { Component } from '@angular/core';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { WhyweComponent } from './components/whywe/whywe.component';
import { MaincategoryComponent } from './components/maincategory/maincategory.component';
import { BannerComponent } from './components/banner/banner.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';

@Component({
  selector: 'app-home',
  imports: [
    SliderComponent,
    WhyweComponent,
    MaincategoryComponent,
    BannerComponent,
    OurstoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
