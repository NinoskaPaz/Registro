import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
  {
    path: 'folder',
    loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule),
  },
  {
    path: 'personajes',
    loadChildren: () => import('../personajes/personajes.module').then( m => m.PersonajesPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'QR',
    loadChildren: () => import('../qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('../pages/e404/e404.module').then( m => m.E404PageModule)
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
