import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DonutsService } from '../../../../../core/services/donuts/donuts.service';
import { IDonut } from '../donuts/donuts';
import { BeveragesService } from '../../../../../core/services/beverages/beverages.service';

@Component({
  selector: 'app-brevages',
  imports: [],
  templateUrl: './brevages.component.html',
  styleUrl: './brevages.component.scss',
})
export class BrevagesComponent {
  private readonly beveragesService = inject(BeveragesService);
  brevData: WritableSignal<IDonut[]> = signal([]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getdonuts();
  }

  getdonuts(): void {
    this.beveragesService.getbeverages().subscribe({
      next: (donuts) => {
        console.log('Donuts fetched successfully:', donuts);
        this.brevData.set(donuts);
      },
      error: (error) => console.error('Error fetching donuts:', error),
    });
  }
}
