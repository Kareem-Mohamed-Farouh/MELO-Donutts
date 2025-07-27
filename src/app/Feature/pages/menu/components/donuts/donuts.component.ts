import { DonutsService } from './../../../../../core/services/donuts/donuts.service';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { IDonut } from './donuts';

@Component({
  selector: 'app-donuts',
  imports: [],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.scss',
})
export class DonutsComponent {
  private readonly donutsService = inject(DonutsService);
  donutsData: WritableSignal<IDonut[]> = signal([]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getdonuts();
  }

  getdonuts(): void {
    this.donutsService.getdonuts().subscribe({
      next: (donuts) => {
        console.log('Donuts fetched successfully:', donuts);
        this.donutsData.set(donuts);
      },
      error: (error) => console.error('Error fetching donuts:', error),
    });
  }
}
