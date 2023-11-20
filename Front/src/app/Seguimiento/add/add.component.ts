import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Modelo/Vehicle';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidator } from 'src/app/Validaciones';

@Component({
  selector: 'app-add',

  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponentSeguimiento implements OnInit {

  selectedFile: File | null = null;

  id : number = 0;
  brand = "";
  color = "";
  transmission = "";
  pathimg="C:\\img";

dataFormServer = {};
registered = false;
errorRegistered=false;
channelForm: FormGroup; 

  constructor(private router:Router, private service:ServiceService, public fb:FormBuilder) 
  { 
    this.channelForm=this.fb.group({
      id : '',
      name: ['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        UserValidator.verificarDatos
      ])]
      })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  
  ngOnInit(): void {
  }
  
filterVehiculo(){
  this.router.navigate(["filterVehiculo"]);
}

Guardar() {
  const vehicle = new Vehicle(
    this.id, this.brand, this.color, this.transmission, this.pathimg
  );

  
  if (this.selectedFile) {
  this.service.createVehicle(vehicle).subscribe(
    data => {
       
        this.brand = data.brand;
        this.color = data.color;
        this.transmission = data.transmission;
        this.pathimg = data.pathimg;
       console.log('Imagen subida con éxito. Ruta en la base de datos:', "C:\img");
      
      alert("Se agregó con éxito el registro");
      this.router.navigate(["listarVehiculo"]);
    },
    error => {
      console.error('Error al guardar  la información:', error);
      alert("Error al guardar  la información");
    }
  );
} else {
  console.error('Selecciona una imagen antes de intentar guardar.');
  alert("Selecciona una imagen antes de intentar guardar");
}
}

}
