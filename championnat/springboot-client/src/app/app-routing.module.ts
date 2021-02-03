import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admins', component: AdminListComponent },
  { path: 'add', component: CreateAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
