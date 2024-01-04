import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prof } from '../models/prof.models';
import { PageProf } from '../models/profPage.models';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {

   constructor(private http:HttpClient) { }

   public getProfs(page: number, size: number): Observable<PageProf> {
    return this.http.get<PageProf>("http://localhost:2324/api" + "/enseignants?page=" + page + "&size=" + size);
  }
  public searchProfs(keyword : string,page: number, size: number):Observable<PageProf>{
    return this.http.get<PageProf>("http://localhost:2324/api" + "/enseignants/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveProf(Prof: Prof):Observable<Prof>{
    return this.http.post<Prof>("http://localhost:2324/api" + "/enseignants",Prof);
  }
  public updateProf(id: number,Prof: Prof):Observable<Prof>{
    return this.http.put<Prof>("http://localhost:2324/api" + "/enseignants/"+id,Prof);
  }
  public getProf(id: number):Observable<Prof>{
    return this.http.get<Prof>("http://localhost:2324/api" + "/enseignants/"+id);
  }
  public deleteProf(id: number): Observable<any>{
    return this.http.delete("http://localhost:2324/api" + "/enseignants/"+id);
  }
}