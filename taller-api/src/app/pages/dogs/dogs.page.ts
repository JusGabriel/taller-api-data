import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class DogsPage {
  dogImage: string = '';
  loading = false;

  constructor(private router: Router) {}

  fetchDog() {
    this.loading = true;
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data: any) => {
        this.dogImage = data.message;
        this.loading = false;
      })
      .catch(() => this.loading = false);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
