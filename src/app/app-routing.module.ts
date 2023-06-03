import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewPessoaComponent } from './component/dashboard/view-pessoa/view-pessoa.component';
import { AddPessoaComponent } from './component/dashboard/add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './component/dashboard/edit-pessoa/edit-pessoa.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo: 'login' },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'view/:pessoaId', component: ViewPessoaComponent },
  { path: 'create', component: AddPessoaComponent },
  { path: 'update/:pessoaId', component: EditPessoaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
