// src/app/pages/cats/cats.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // necesario para ion-header, ion-button, etc.
})
export class CatsPage {
  catImage: string = '';
  loading = false;

  fetchCat() {
    this.loading = true;
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then((data: any) => {
        this.catImage = data[0].url;
        this.loading = false;
      })
      .catch(() => this.loading = false);
  }
}
