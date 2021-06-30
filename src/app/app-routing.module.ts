import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {
    path: 'album/:id',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then( m => m.AlbumsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
