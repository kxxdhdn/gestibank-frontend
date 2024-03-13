import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private Http: HttpClient) { }

  createActualite(actualite: any) {
    return this.Http.post(environment.baseUrl + "actualites", actualite);
  }

  getAllActualites() {
    return this.Http.get(environment.baseUrl + "actualites");
  }

  deleteActualite(actualite: any) {
    return this.Http.delete(environment.baseUrl + "actualites/" + actualite.id)
  }

  getByIdActualite(id: number) {
    return this.Http.get(environment.baseUrl + "actualites/" + id);
  }

  updateActualite(actualite: any) {
    return this.Http.put(environment.baseUrl + "actualites/" + actualite.id, actualite);
  }

}
