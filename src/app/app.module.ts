import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomFormComponent } from './genaric/custom-form/custom-form.component';
import { FormControlDirective } from './form-control.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './genaric/dialog/dialog.component';
import { LoaderComponent } from './genaric/loader/loader.component';
import { AccordionComponent } from './genaric/accordion/accordion.component';
import { DrillsComponent } from './genaric/drills/drills.component';
import { SimmerComponent } from './genaric/simmer/simmer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomFormComponent,
    FormControlDirective,
    DialogComponent,
    LoaderComponent,
    AccordionComponent,
    DrillsComponent,
    SimmerComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
