import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.page.html',
  styleUrls: ['./joke.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // necesario para ion-header, ion-button, etc.
})
export class JokePage {
  joke: any = null;
  loading = false;
  
constructor(private router: Router) {}

  fetchJoke() {
    this.loading = true;
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
      .then(res => res.json())
      .then((data: any) => {
        this.joke = data;
        this.loading = false;
      })
      .catch(() => this.loading = false);
  }
    goHome() {
    this.router.navigate(['/home']);
  }
}
