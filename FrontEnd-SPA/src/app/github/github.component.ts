import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {  map } from "rxjs/operators";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  person = [];
  private url: string;
  constructor(private http: Http) {}
 
  ngOnInit() {
    this.url = "https://api.github.com/users/JanekKondzior/followers";
    this.http
      .get(this.url)
      .pipe(
        map(res => {
          return res.json();
        })
      )
      .subscribe(res => {
        this.person = res;
      });
  }

  onClick(){
    console.log("Dick face");
  }

  }
  

