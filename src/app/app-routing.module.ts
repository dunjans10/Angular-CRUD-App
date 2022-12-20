import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { DetailsPageComponent } from './components/details/details-page.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddEditUserComponent },
  { path: 'edit-user/:id', component: AddEditUserComponent },
  { path: 'details/:id' , component: DetailsPageComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: RouteNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
