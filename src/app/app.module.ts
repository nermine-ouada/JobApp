import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { JobformComponent } from './jobform/jobform.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationsComponent } from './applications/applications.component';
import { RecrutementsComponent } from './recrutements/recrutements.component';
import { RecrutementComponent } from './recrutement/recrutement.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    JobformComponent,
    ProfilesComponent,
    ProfileComponent,
    ProfileformComponent,
    ApplicationComponent,
    ApplicationsComponent,
    RecrutementsComponent,
    RecrutementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
