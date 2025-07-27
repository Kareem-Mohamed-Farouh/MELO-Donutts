import { Component, inject, signal, WritableSignal } from '@angular/core';
import { IDonut } from '../donuts/donuts';
import { CheesecakesService } from '../../../../../core/services/cheesecakes/cheesecakes.service';

@Component({
  selector: 'app-cheascake',
  imports: [],
  templateUrl: './cheascake.component.html',
  styleUrl: './cheascake.component.scss',
})
export class CheascakeComponent {
  private readonly cheesecakesService = inject(CheesecakesService);
  cheesData: WritableSignal<IDonut[]> = signal([]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getdonuts();
  }

  getdonuts(): void {
    this.cheesecakesService.getcheesecakes().subscribe({
      next: (donuts) => {
        console.log('Donuts fetched successfully:', donuts);
        this.cheesData.set(donuts);
      },
      error: (error) => console.error('Error fetching donuts:', error),
    });
  }
}
