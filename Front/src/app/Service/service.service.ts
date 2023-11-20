import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/Modelo/Vehicle';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }


  getVehicle()
  {
    return this.http.get<Vehicle[]>(this.baseApiUrl+'/api/Vehicle');
  }

  getSpecificVehicle(id:string) {
    return this.http.get<Vehicle[]>(this.baseApiUrl+'/api/Vehicle'+id);
  }

  createVehicle(vehicle:Vehicle)
  {
     return this.http.post<Vehicle>(this.baseApiUrl+'/api/Vehicle/',vehicle);
  }
  getId(id:number) {
    return this.http.get<Vehicle>(this.baseApiUrl+"/"+id);
  }

  updateName(vehicle:Vehicle) {
    return this.http.put<Vehicle>(this.baseApiUrl+"/api/Vehicle/"+vehicle.id,vehicle);
  }

  delete(vehicle:Vehicle)
  {
    return this.http.delete<Vehicle>(this.baseApiUrl+"/api/Vehicle/"+vehicle.id);
  }
}
