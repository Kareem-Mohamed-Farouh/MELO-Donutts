import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SectiontwoComponent } from './components/sectiontwo/sectiontwo.component';
import { OurstoryComponent } from '../home/components/ourstory/ourstory.component';
import { AboutstoryComponent } from './components/aboutstory/aboutstory.component';

@Component({
  selector: 'app-about',
  imports: [MainComponent, SectiontwoComponent, AboutstoryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
