import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PageClasse } from '../models/profPage.models';
import { Classe } from '../models/classes.models';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

   constructor(private http:HttpClient) { }

   public getClasses(page: number, size: number): Observable<PageClasse> {
    return this.http.get<PageClasse>("http://localhost:2324/api" + "/classes?page=" + page + "&size=" + size);
  }
  public searchClassesSem(keyword : string, sem:number,page: number, size: number):Observable<PageClasse>{
    return this.http.get<PageClasse>("http://localhost:2324/api" + "/classes/searchSem?keyword="+keyword+"&page=" + page + "&size=" + size+"&sem="+sem)
  }
  public searchClasses(keyword : string, page: number, size: number):Observable<PageClasse>{
    return this.http.get<PageClasse>("http://localhost:2324/api" + "/classes/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveClasse(Classe: Classe):Observable<Classe>{
    return this.http.post<Classe>("http://localhost:2324/api" + "/classes",Classe);
  }
  public updateClasse(id: number,Classe: Classe):Observable<Classe>{
    return this.http.put<Classe>(`http://localhost:2324/api/classes/${id}`,Classe);
  }
  public getClasse(id: number):Observable<Classe>{
    return this.http.get<Classe>("http://localhost:2324/api" + "/classes/"+id);
  }
  public deleteClasse(id: number): Observable<any>{
    return this.http.delete("http://localhost:2324/api" + "/classes/"+id);
  }
}