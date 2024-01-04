import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementDeModule } from '../models/elementModule.models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiDeTempsService {


  constructor(private http:HttpClient) { }

  public getEmplois(): Observable<ElementDeModule[]> {
    return this.http.get<ElementDeModule[]>("http://localhost:2324/api" + "/elementModules");
  }
  getEmploiByProf(idProf: number) {
    return this.http.get<ElementDeModule[]>("http://localhost:2324/api" + "/emploisDeTemps/prof/" + idProf);
  }
   getEmploisByClasse(classeId: number) {
    return this.http.get<ElementDeModule[]>("http://localhost:2324/api" + "/emploisDeTemps/" + classeId);
  }
}