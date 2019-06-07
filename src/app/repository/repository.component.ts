import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { MainService } from '../main.service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor( private location:Location,  private router:Router,private route:ActivatedRoute, private mainservice:MainService) { }
 
  reponame:string;
  repoDetails:any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.reponame = params.get('name');
      console.log(this.reponame)
    })
    this.mainservice.getRepo(this.reponame).subscribe(res =>{
      this.repoDetails = res;
      console.log(res)
    })
  }
  back(){
    this.location.back();
  }
}
