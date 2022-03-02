import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { Uni } from 'src/app/interface/universidad.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  formulario = this.formBuilder.group({
    country:'',
  })
  datos :[]=[];
  pais:string="";
  uni : Uni[]=[];

  constructor(private formBuilder : FormBuilder,private apiServices:ApiService) {}


  ngOnInit() {
    this.apiServices.getUser().subscribe((res:any)=>{
      this.datos = res;
     console.log(this.datos)
      })

   
  }

  buscar(){
    this.pais=this.formulario.get('country')?.value;
    this.apiServices.Buscar(this.pais).subscribe((res:any)=>{
      this.uni=res
    })
  
    this.limpiarForm(); 

}
limpiarForm(){
  this.formulario.reset()
}
}

