import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageDepartment } from '../models/profPage.models';
import { Departement } from '../models/departement.models';
import { Filiere } from '../models/filieres.models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  public searchDepartments(keyword: string, page: number, size: number): Observable<PageDepartment> {
    return this.http.get<PageDepartment>(`http://localhost:2324/api/departements/search?keyword=${keyword}&page=${page}&size=${size}`);
  }

  public saveDepartment(department: Departement): Observable<Departement> {
    return this.http.post<Departement>(`http://localhost:2324/api/departements`, department);
  }

  public updateDepartment(id: number, department: Departement): Observable<Departement> {
    return this.http.put<Departement>(`http://localhost:2324/api/departements/${id}`, department);
  }

  public getDepartment(id: number): Observable<Departement> {
    return this.http.get<Departement>(`http://localhost:2324/api/departements/${id}`);
  }
  public getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`http://localhost:2324/api/departements`);
  }

  public deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`http://localhost:2324/api/departements/${id}`);
  }

  public getFilieres(id: number): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(`http://localhost:2324/api/departements/${id}/filieres`);
  }
}