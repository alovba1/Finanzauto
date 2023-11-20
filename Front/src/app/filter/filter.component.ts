import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Modelo/Vehicle';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  vehicle:Vehicle[];
  id : number = 0;
  brand = "";
  color = "";
  transmission = "";
  pathimg="";

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Another Item' },
    // Add more items as needed
  ];
  filteredItems: any[];
  searchTerm: string = '';

  constructor(private service:ServiceService, private router:Router) { 
    this.filteredItems = this.items;
    this.vehicle=[];
    this.filteredItems = this.vehicle;
   
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filter(){
    const vehicl = new Vehicle(
      this.id, this.brand, this.color, this.transmission, this.pathimg
    );
/*
    this.service.getId(this.id)
    .subscribe(data=>{
    
        alert("Buscar");
       this.router.navigate(["listar"]);
      });
  */  
  }
  ngOnInit() {
   
  }

}
