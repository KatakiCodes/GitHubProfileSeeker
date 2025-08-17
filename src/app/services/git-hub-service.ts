import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { BaseResponseModel } from '../Models/BaseResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  baseUrl:string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getUser(username: string): Observable<BaseResponseModel<User>> {

     return this.http.get<User>(this.baseUrl+username).pipe(map((response)=>{
        return {
          data: response,
          errorMessage: ''
        };
      }),
      catchError((error)=>of({
        data: null,
        errorMessage: (error.status === 404)? error.error.message : 'An error occurred while fetching the user data.'
      }))
    );
  }

}
