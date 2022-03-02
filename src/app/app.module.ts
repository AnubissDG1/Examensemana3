import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/app-routing/app-routing.modules';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { MostrarComponent } from './components/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
 
    
      MostrarComponent,
 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
