import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { Uni } from 'src/app/interface/universidad.interface';
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  
  pais:string="";
  uni : any[]=[];

  
  constructor(private formBuilder : FormBuilder,private apiServices:ApiService) { }

  ngOnInit() {
   this.busca();
   
     
  }
  busca(){
    this.apiServices.Buscar(this.pais).subscribe((resp:any)=>{
      this.uni=resp;
    })
      
  }


   
  }

  

