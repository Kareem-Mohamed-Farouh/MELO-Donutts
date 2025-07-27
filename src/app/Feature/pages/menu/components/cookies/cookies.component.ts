import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CookiesService } from '../../../../../core/services/cookies/cookies.service';
import { IDonut } from '../donuts/donuts';

@Component({
  selector: 'app-cookies',
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss',
})
export class CookiesComponent {
  private readonly cookiesService = inject(CookiesService);
  cookiessData: WritableSignal<IDonut[]> = signal([]);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getdonuts();
  }

  getdonuts(): void {
    this.cookiesService.getCookies().subscribe({
      next: (donuts) => {
        console.log('Donuts fetched successfully:', donuts);
        this.cookiessData.set(donuts);
      },
      error: (error) => console.error('Error fetching donuts:', error),
    });
  }
}
