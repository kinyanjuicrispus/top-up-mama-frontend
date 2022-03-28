import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCharacters(options:any) : Observable<any>{
    return this.http.post<any>(this.baseUrl+'characters',options)
      .pipe(
        catchError(this.config.handleError)
      );
  }
}
