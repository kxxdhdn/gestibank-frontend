import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private Http: HttpClient) { }

  createPrestation(prestation: any) {
    return this.Http.post(environment.baseUrl+"prestations/save", prestation);
  }

  getAllPrestations() {
    return this.Http.get(environment.baseUrl+"prestations/list");
  }

  deletePrestation(prestation: any){
    return this.Http.delete(environment.baseUrl + "prestations/" + prestation.id) 
  }

  getByIdPrestation(id: number) {
    return this.Http.get(environment.baseUrl + "prestations/" + id);
  }

  updatePrestation(prestation: any) {
    return this.Http.put(environment.baseUrl+"prestations/" + prestation.id, prestation);
  }

}
