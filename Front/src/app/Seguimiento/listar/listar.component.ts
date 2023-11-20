import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Vehicle } from 'src/app/Modelo/Vehicle';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponentSeguimiento implements OnInit {


  vehicle:Vehicle[];
  constructor(private service:ServiceService, private router:Router) {  this.vehicle=[]}

  ngOnInit()  {
  this.service.getVehicle()
 .subscribe(data=>{
   this.vehicle=data;
  })
  }

  Delete(vehicle:Vehicle){
    this.service.delete(vehicle)
    .subscribe(data=>{
      this.vehicle=this.vehicle.filter(p=>p!==vehicle);
      alert("Registro Eliminado");
    })
    
    }

}
