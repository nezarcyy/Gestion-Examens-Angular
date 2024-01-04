import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../models/filieres.models';
import { PageFiliere } from '../models/profPage.models';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {


   constructor(private http:HttpClient) { }
  public getAllFilieres(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(`http://localhost:2324/api/filieres/all`);
  }
   public getFilieres(page: number, size: number): Observable<PageFiliere> {
    return this.http.get<PageFiliere>("http://localhost:2324/api" + "/filieres?page=" + page + "&size=" + size);
  }
  public searchFilieres(keyword : string,page: number, size: number):Observable<PageFiliere>{
    return this.http.get<PageFiliere>("http://localhost:2324/api" + "/filieres/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveFiliere(Filiere: Filiere):Observable<Filiere>{
    return this.http.post<Filiere>("http://localhost:2324/api" + "/filieres",Filiere);
  }
  public updateFiliere(id: number,Filiere: Filiere):Observable<Filiere>{
     console.log("Update f");
    return this.http.put<Filiere>("http://localhost:2324/api" + "/filieres/"+id,Filiere);
  }
  public getFiliere(id: number):Observable<Filiere>{
    return this.http.get<Filiere>("http://localhost:2324/api" + "/filieres/"+id);
  }
  public deleteFiliere(id: number): Observable<any>{
    return this.http.delete("http://localhost:2324/api" + "/filieres/"+id);
  }
  public getSemsterByFiliere(id: number):Observable<any>{
    return this.http.get("http://localhost:2324/api" + "/filieres/"+id+"/semesters");
  }
}