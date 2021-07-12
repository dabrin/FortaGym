import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'registro-usuarios',
    loadChildren: () => import('./registro-usuarios/registro-usuarios.module').then( m => m.RegistroUsuariosPageModule)
  },
  {
    path: 'lista-horarios',
    loadChildren: () => import('./lista-horarios/lista-horarios.module').then( m => m.ListaHorariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
