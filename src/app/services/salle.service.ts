import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../models/salles.models';
import { PageSalle } from '../models/profPage.models';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  constructor(private http: HttpClient) { }

  public getSalles(page: number, size: number): Observable<PageSalle> {
    return this.http.get<PageSalle>("http://localhost:2324/api" + "/salles?page=" + page + "&size=" + size);
  }

  public searchSalles(keyword: string, page: number, size: number): Observable<PageSalle> {
    return this.http.get<PageSalle>("http://localhost:2324/api" + "/salles/search?keyword=" + keyword + "&page=" + page + "&size=" + size);
  }

  public saveSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>("http://localhost:2324/api" + "/salles", salle);
  }

  public updateSalle(id: number, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>("http://localhost:2324/api" + "/salles/" + id, salle);
  }

  public getSalle(id: number): Observable<Salle> {
    return this.http.get<Salle>("http://localhost:2324/api" + "/salles/" + id);
  }

   public deleteSalle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:2324/api/salles/${id}`);
  }
}