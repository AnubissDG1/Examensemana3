import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from '../mostrar/mostrar.component';



const routes : Routes = [
 
 
  
 
  {
    path:'mostrar',
    component:MostrarComponent
  },
 
  
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }