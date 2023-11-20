import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/Modelo/Vehicle';
import { ServiceService } from 'src/app/Service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentSeguimiento implements OnInit {

  id : number = 0;
  brand: string = '';

  color = "";
  transmission = "";
  pathimg="C:\\img";
  vehicl:Vehicle[];
  channelForm: FormGroup; 

  constructor(private route:ActivatedRoute, private service:ServiceService, public fb:FormBuilder) {
    this.vehicl=[]
   this.channelForm=this.fb.group({
    id : '',
    
    name: ['',Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])]
    })
  
  }
  
 

updateName() {
    const vehicle = new Vehicle(
      this.id, this.brand, this.color, this.transmission, this.pathimg
    );


    alert("valor id"+this.id);

    this.service.updateName(vehicle).subscribe(
      data => {
     this.id = data.id;
        this.brand = data.brand;
        this.color = data.color;
        this.transmission = data.transmission;
         this.pathimg = data.pathimg;
      
        alert("Se Actualizo con éxito el registro");
        
      },
      error => {
        console.error('Error al actualizar la información:', error);
        alert("Error al actualizar  la información");
      }
    );
  
  }


  ngOnInit()  {
    this.service.getVehicle()
   .subscribe(data=>{
     this.vehicl=data;
    })
    
}

}