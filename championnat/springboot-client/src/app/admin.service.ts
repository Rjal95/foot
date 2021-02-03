import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8082/admin';

 constructor(private http: HttpClient) { }

 getAdmin(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/${id}`);
 }

 createAdmin(admin: Object): Observable<Object> {
   return this.http.post(`${this.baseUrl}/create`, admin);
 }

 updateAdmin(id: number, value: any): Observable<Object> {
   return this.http.put(`${this.baseUrl}/${id}`, value);
 }

 deleteAdmin(id: number): Observable<any> {
   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
 }

 getAdminsList(): Observable<any> {
   return this.http.get(`${this.baseUrl}/findAll`);
 }
}
