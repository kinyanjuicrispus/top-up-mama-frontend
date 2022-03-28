import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient, private config: ConfigService) { }

  getBooks() : Observable<any>{
    return this.http.get<any>(this.baseUrl+'books')
      .pipe(
        catchError(this.config.handleError)
      );
  }
}


