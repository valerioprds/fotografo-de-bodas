import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeddingsComponent } from './photogallery/weddings/weddings.component';
import { InigobeaComponent } from './photogallery/inigobea/inigobea.component';
import { DavidangelComponent } from './photogallery/davidangel/davidangel.component';
import { SandradiegoComponent } from './photogallery/sandradiego/sandradiego.component';
import { ContactComponent } from './components/contact/contact.component';
import { RafapaolaComponent } from './photogallery/rafapaola/rafapaola.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'weddings',
    component: WeddingsComponent,
  },
  { path: 'bea-iñigo', component: InigobeaComponent },
  { path: 'david-angel', component: DavidangelComponent },
  { path: 'sandra-diego', component: SandradiegoComponent },
  { path: 'rafa-paola', component: RafapaolaComponent },

  { path: 'contacto', component: ContactComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
