import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class CatsPage {
  catImage: string = '';
  loading = false;

  constructor(private router: Router) {}

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

  goHome() {
    this.router.navigate(['/home']);
  }
}
