
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/userModel';
import { Observable } from 'rxjs';
import {url} from '../settings/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}



    createUser(user:User): Observable<any>{
        return this.http.post(url.apiUrl + 'users', user);
    }

    listarUser(): Observable <User[]>{
        return this.http.get<User[]>(url.apiUrl+'users');
    }

    getUserByid(id: number): Observable<User>{
        return this.http.get <User> (`${url.apiUrl} users/${id}`)

    }


    updateUser(id: number, user: User):
    Observable<any>{
        return this.http.put(`${url.apiUrl} users/${id}`, user);
    }

    deleteUser(id: number): Observable <any>{
        return this.http.delete(`${url.apiUrl}users/${id}`);
    }
}
