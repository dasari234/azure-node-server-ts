import { JiraService } from './../services/jira.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {of as observableOf, Observable} from 'rxjs';



@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  jiraProjects= [];
  testApi:any;
  constructor(public JiraService:JiraService) { }

  ngOnInit() {
    this.jiraProjects = this.JiraService.getAllJiraProjects();

    // this.JiraService.getGeoCode().subscribe(geoCode => {
    //   this.testApi = geoCode;
    //   console.log("----------------------", this.testApi);
    // });

    this.JiraService.getLocalApi().subscribe(data => {
      this.testApi = data;
      console.log("11111111111", this.testApi);
    })
  }



}
