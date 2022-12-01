import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register',component: RegisterComponent},
  { path: 'login',component: LoginComponent},
  { path: 'forgot-password',component: ForgotPasswordComponent},
  { path: 'varify-email',component: VarifyEmailComponent},
  { path: 'dashboard',component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
