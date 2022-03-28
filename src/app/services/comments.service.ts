import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient, private config: ConfigService) { }

  getComments() : Observable<any>{
    return this.http.get<any>(this.baseUrl+'comments')
      .pipe(
        catchError(this.config.handleError)
      );
  }

  saveComment(data: any){
    return this.http.post<any>(this.baseUrl+'comments', data)
      .pipe(
        catchError(this.config.handleError)
      );
  }
  
  getIPAddress()
  {
    return this.http.get("http://api.ipify.org/?format=json")
    .pipe(
      catchError(this.config.handleError)
    );
  }
}


