import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DonutsService } from '../../../../../core/services/donuts/donuts.service';
import { IDonut } from '../donuts/donuts';

@Component({
  selector: 'app-sinabon',
  imports: [],
  templateUrl: './sinabon.component.html',
  styleUrl: './sinabon.component.scss',
})
export class SinabonComponent {
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
