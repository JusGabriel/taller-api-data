import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'joke',
    loadComponent: () => import('./pages/joke/joke.page').then(m => m.JokePage)
  },
  {
    path: 'cats',
    loadComponent: () => import('./pages/cats/cats.page').then(m => m.CatsPage)
  },
  {
    path: 'dogs',
    loadComponent: () => import('./pages/dogs/dogs.page').then(m => m.DogsPage)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
