import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders} from '@angular/common/http'
>>>>>>> 191f76285d3ae20f13849f53cc137e1446a4fb07
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MainService {
<<<<<<< HEAD
   
=======
>>>>>>> 191f76285d3ae20f13849f53cc137e1446a4fb07
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
<<<<<<< HEAD
=======
  
>>>>>>> 191f76285d3ae20f13849f53cc137e1446a4fb07
}
