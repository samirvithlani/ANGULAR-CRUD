import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public addUser(data):Observable<any>{

    return this.http.post("https://primeflixapis.herokuapp.com/api/register",data);
  }

  public getAllUsers():Observable<any>{

    // const httpOptions = {
    //   headers:new HttpHeaders({
    //     'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ0NWQwZjhkYmE5OTU0ZDljNzUxMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTEzMjg0ODMsImV4cCI6MTY1MTU4NzY4M30.SGZcgBn_ejkzDciLD9N-CQsRxgNAWG3cKpwnLWdZdv8"
    //     })}
    return this.http.get("http://localhost:8080/getalldoctors");
  }

  public deleteUser(id):Observable<any>{

    return this.http.delete("http://localhost:8080/deletedoctor/"+id);
  }

  public getUserById(id):Observable<any>{

    return this.http.get("http://localhost:8080/getdoctor/"+id);
  }

  public updateUser(id,data):Observable<any>{

    return this.http.put("http://localhost:8080/updatedoctor/"+id,data);
  }

}
