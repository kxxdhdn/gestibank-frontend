import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front/front.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AproposComponent } from './apropos/apropos.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { PrestationComponent } from './prestation/prestation.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    FrontComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AproposComponent,
    ActualiteComponent,
    PrestationComponent,
    EquipeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FrontofficeModule { }
