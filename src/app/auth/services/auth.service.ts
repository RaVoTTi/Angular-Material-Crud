import { UserLogin } from './../../interfaces/auth.intreface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RESTAuth, User } from 'src/app/interfaces/auth.intreface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = environment.apiUrl;
  private _login = {
    email: 'test1@test.com',
    password: '123456',
  };
  private _user: User | undefined;
  private _token: string | undefined;

  constructor(private http: HttpClient) {}

  get user() :User{
    return {...this._user!}
  }
  get token() :string{
    return this._token!
  }

  login(): Observable<RESTAuth> {
    return this.http
      .post<RESTAuth>(`${this._apiUrl}/auth/login`, this._login)
      .pipe(tap((resp) => {
        this._user = resp.user
        this._token = resp.token
      }),
      tap(auth => localStorage.setItem('super-token', this.token))
      );
  }
}
