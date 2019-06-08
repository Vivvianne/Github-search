import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MainService {
   
  constructor(private http: HttpClient) { }

  getProfile(name:string){
    return this.http.get(environment.apiUrl+name+"?access_token="+environment.gitaccesstoken);
  }

  getRepos(url){
    return this.http.get(url);
  }
  getRepo(name){
    return this.http.get("https://api.github.com/repos/"+name);
  }
}
