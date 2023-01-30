import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobformComponent } from './jobform/jobform.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { ApplicationsComponent } from './applications/applications.component';
import { RecrutementsComponent } from './recrutements/recrutements.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'home',component:HomeComponent},
  {path: 'jobs',component:JobsComponent},
  {path: 'jobform',component:JobformComponent},
  {path: 'profiles',component:ProfilesComponent},
  {path: 'profileform',component:ProfileformComponent},
  {path: 'applications',component:ApplicationsComponent},
  {path: 'recrutements',component:RecrutementsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
