<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private mainservice: MainService) { }

  username:string;
  userdata:any;
  repos:any;
  searching:boolean =false;
  ngOnInit() {
    
  }

  searchGit(){
    this.searching = true;
    this.mainservice.getProfile(this.username).subscribe(res=>{
   this.userdata = res;
    this.mainservice.getRepos(this.userdata.repos_url).subscribe(res=>{
      this.repos = res
    });
    this.searching =false;
    })

  }

}
=======
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private mainservice: MainService) { }
  username: string;
  userdata: any;
  repos: any;
  searching: boolean = false;



  ngOnInit() {
  }

  searchGit(){
    this.searching = true;
    this.mainservice.getProfile(this.username).subscribe(res=>{
   this.userdata = res;
    this.mainservice.getRepos(this.userdata.repos_url).subscribe(res=>{
      this.repos = res
    });
    this.searching =false;
    })

  }


}
>>>>>>> 191f76285d3ae20f13849f53cc137e1446a4fb07
